import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AppService } from './app.service';

@Controller()
@ApiTags('APP总模块')
export class AppController {
  constructor(private readonly appService: AppService) { }

  // @Get('/goodstype')
  // getGoodsType(): string {
  //   return this.appService.getGoodsType();
  // }
  @Get('/list')
  getSwipList(): any {
    return this.appService.getSwipList();
  }
  // @Get(':id')
  // //  @Param('id') 有参数的话，返回的就是没有被序列化的值 --> 没有参数的话，会自动序列化
  // say(@Param('id') id: string): string {
  //   return id
  // }
}
