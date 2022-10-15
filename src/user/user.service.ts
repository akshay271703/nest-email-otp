import { HttpException, Injectable } from '@nestjs/common';
import { UserRepository } from 'src/database/repository/user.repository';
import { CreateUserDto, RegisterUserDto } from './dto/request.dto';
import { CreateUserResponseDto, UserResponseDto } from './dto/response.dto';
import { BcryptService } from 'src/services/bcrypt.service';
import { OTPService } from 'src/services/otp.service';
import { plainToInstance, instanceToPlain } from 'class-transformer';
import { AWSService } from 'src/aws/aws.service';
import { transformMailBody } from 'src/utilities/transformers/mail.tranformers';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepo: UserRepository,
    private readonly bcryptService: BcryptService,
    private readonly otpService: OTPService,
    private readonly awsService: AWSService
  ) {}

  async createUser(user: CreateUserDto): Promise<CreateUserResponseDto> {
    user.password = await this.bcryptService.plainToHash(user.password);
    user.otp = this.otpService.generateOTP();
    const mailData = transformMailBody({
      to: [user.email],
      subject: 'Welcome to the club',
      text: `Your otp verification is ${user.otp}`
    });
    await this.awsService.sendEmail(mailData);
    return await this.userRepo.createUser(user);
  }

  async getAllUsers(): Promise<UserResponseDto[]> {
    const users = await this.userRepo.find({});
    return plainToInstance(UserResponseDto, <UserResponseDto[]>instanceToPlain(users), { excludeExtraneousValues: true });
  }

  async confirmUser(data: RegisterUserDto): Promise<any> {
    const user = await this.userRepo.findOneBy({ id: data.id });
    if (!user) {
      throw new HttpException({ message: 'User not found' }, 401);
    }
    if (user.isEnabled) {
      throw new HttpException({ message: 'User already active' }, 400);
    }
    if (user.otp !== data.otp) {
      throw new HttpException({ message: 'Invalid verification code' }, 400);
    }
    const updatedUser = Object.assign(user, { isEnabled: true });
    this.userRepo.save(updatedUser);
    return { message: 'Successfully registered' };
  }
}
