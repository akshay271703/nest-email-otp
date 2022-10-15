import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, RegisterUserDto } from './dto/request.dto';
import { CreateUserResponseDto, UserResponseDto } from './dto/response.dto';

@Controller('/user')
export class UsersController {
  constructor(private userService: UserService) {}

  @Post('')
  async createUser(@Body() data: CreateUserDto): Promise<CreateUserResponseDto> {
    return await this.userService.createUser(data);
  }

  @Get('')
  async getAllUsers(): Promise<UserResponseDto[]> {
    return await this.userService.getAllUsers();
  }

  @Post('/confirm')
  async confirmUser(@Body() data: RegisterUserDto): Promise<any> {
    return await this.userService.confirmUser(data);
  }
}
