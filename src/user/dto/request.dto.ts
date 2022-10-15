import { IsString, IsNotEmpty, IsBoolean } from 'class-validator';
import { Exclude } from 'class-transformer';
export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  firstname: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @Exclude()
  isEnabled: boolean;

  @Exclude()
  otp: string;
}

export class RegisterUserDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  otp: string;
}
