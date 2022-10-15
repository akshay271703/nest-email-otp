import { CreateUserDto } from './request.dto';
import { Exclude, Expose } from 'class-transformer';

export class CreateUserResponseDto extends CreateUserDto {
  @Expose()
  firstname: string;

  @Expose()
  lastname: string;

  @Expose()
  id: string;

  @Expose()
  email: string;

  @Exclude()
  password: string;

  @Exclude()
  otp: string;

  @Exclude()
  isEnabled: boolean;
}

export class UserResponseDto {
  @Expose()
  firstname: string;

  @Expose()
  lastname: string;

  @Expose()
  id: string;

  @Expose()
  email: string;

  @Expose()
  isEnabled: boolean;
}
