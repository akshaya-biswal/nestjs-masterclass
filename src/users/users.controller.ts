import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';

@Controller('users')
export class UsersController {
  @Get('/:id?')
  public getUsers(@Param() getUsersParamDto: GetUsersParamDto) {
    return getUsersParamDto;
  }

  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }

  public editUsers() {
    return 'You sent a get request to users endpoints';
  }
}
