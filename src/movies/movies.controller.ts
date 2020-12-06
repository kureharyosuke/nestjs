import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This  will return all movies';
  }
  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `We are searching for a movie made after : ${searchingYear} `;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `This will return one movies with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:id')
  patth(@Param('id') movieId: string, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }

  @Put('/:id')
  put(@Param('id') movieId: string) {
    return `This will Put a movie with the id: ${movieId}`;
  }
}
