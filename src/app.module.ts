import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { UsersController } from './users/users.controller';
import { CompanyController } from './company/company.controller';
import { MoviesService } from './movies/movies.service';
import { UsersService } from './users/users.service';

@Module({
  imports: [],
  controllers: [MoviesController, UsersController, CompanyController],
  providers: [MoviesService, UsersService],
})
export class AppModule {}
