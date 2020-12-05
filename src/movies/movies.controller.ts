import {
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This  will return all movies';
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movies with the id: ${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patth(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }

  @Put('/:id')
  put(@Param('id') movieId: string) {
    return `This will Put a movie with the id: ${movieId}`;
  }
}
