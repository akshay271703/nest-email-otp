import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AWSService } from 'src/aws/aws.service';
import { User } from 'src/database/entities/user.entity';
import { UserRepository } from 'src/database/repository/user.repository';
import { BcryptService } from 'src/services/bcrypt.service';
import { OTPService } from 'src/services/otp.service';
import { UsersController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [UserRepository, UserService, BcryptService, OTPService, AWSService],
  controllers: [UsersController]
})
export class UserModule {}
