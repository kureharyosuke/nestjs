import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { UsersController } from './users/users.controller';
import { CompanyController } from './company/company.controller';

@Module({
  imports: [],
  controllers: [MoviesController, UsersController, CompanyController],
  providers: [],
})
export class AppModule {}
