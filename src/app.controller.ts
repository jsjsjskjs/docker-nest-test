import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Cache } from 'cache-manager'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }
}
