import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/list')
  getSwipList(): any[] {
    return this.appService.getSwipList();
  }
  @Get(':id')
  //  @Param('id') 有参数的话，返回的就是没有被序列化的值 --> 没有参数的话，会自动序列化
  say(@Param('id') id: string): string {
    return id
  }
}
