import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { plainToInstance, instanceToPlain } from 'class-transformer';
import { User } from '../entities/user.entity';
import { CreateUserResponseDto } from 'src/user/dto/response.dto';
import { CreateUserDto } from 'src/user/dto/request.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(data: CreateUserDto): Promise<CreateUserResponseDto> {
    const user = await this.save(this.create(data));
    return plainToInstance(CreateUserResponseDto, instanceToPlain(user), { excludeExtraneousValues: true });
  }
}
