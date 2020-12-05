import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/hello') //컨트롤러가 url 요청
  // sayhello function(함수)을 실행
  sayHello(): string {
    return 'Hello NEST.js controller';
  }
}
