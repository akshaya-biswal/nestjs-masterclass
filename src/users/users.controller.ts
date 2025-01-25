import { Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  public getUsers() {
    return 'You sent a get request to users endpoints';
  }

  @Get('/:id')
  public getUser(@Param() params: any) {
    return {
      params,
      message: 'You sent a get request to a single user endpoints',
    };
  }

  @Post()
  public createUsers() {
    return 'You sent a get request to users endpoints';
  }

  public editUsers() {
    return 'You sent a get request to users endpoints';
  }
}
