import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  userAll() {
    return 'This is user page';
  }

  @Post()
  userPost() {
    return 'This is user Post';
  }

  @Get('/:id')
  userGet(@Param('id') usersId: string) {
    return `This is your Number: ${usersId}`;
  }

  @Patch('/:id')
  userPatch(@Param('id') usersId: string) {
    return `This will patch a user with the id: ${usersId}`;
  }

  @Put('/:id')
  userPut(@Param('id') usersId: string) {
    return `This will Put a user with the id: ${usersId}`;
  }

  @Delete('/:id')
  userDelete(@Param('id') usersId: string) {
    return `This will Delete a user with the id: ${usersId}`;
  }
}
