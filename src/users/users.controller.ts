import {
  Body,
  Controller,
  DefaultValuePipe,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { GetUsersParamDto } from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-user.dto';
import { UsersService } from './providers/users.service';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('Users')
export class UsersController {
  constructor(
    // Injecting Users Service
    private readonly usersService: UsersService,
  ) {}

  @Get('/:id?')
  @ApiOperation({
    summary: 'Fetches a list of registered users on the application.',
  })
  @ApiQuery({
    name: 'limit',
    type: String,
    description: 'The upper limit of pages you want the pagination to return',
    required: false,
    example: 10,
  })
  @ApiQuery({
    name: 'page',
    type: String,
    description:
      'The position of the page number that you want the API to return',
    required: false,
    example: 1,
  })
  @ApiResponse({
    status: 200,
    description: 'Users fetched successfully based on the query',
  })
  public getUsers(
    @Param() getUsersParamDto: GetUsersParamDto,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
    @Query('page', new DefaultValuePipe(10), ParseIntPipe) page: number,
  ) {
    return this.usersService.findAll(getUsersParamDto, limit, page);
  }

  @Post()
  public createUsers(@Body() createUserDto: CreateUserDto) {
    return createUserDto;
  }

  @Patch()
  public patchUser(@Body() patchUserDto: PatchUserDto) {
    return patchUserDto;
  }
}
