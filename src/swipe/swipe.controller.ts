import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Swipe } from 'src/interfaces/swipe.interface';
import { SwipeService } from './swipe.service'

@Controller('swipe')
@ApiTags("获取轮播图数据")
export class SwipeController {
    constructor(private swipeService: SwipeService) { }

    @Post()
    @ApiOperation({
        summary: "添加轮播提数据",
    })
    async addGoodsType(@Body() swipeTypeDto: Swipe) {
        return await this.swipeService.addSwipe(swipeTypeDto);
    }

    @Get('/all')
    @ApiOperation({
        summary: "获取轮播图数据",
    })
    async findSwipe() {
        return await this.swipeService.findSwipe()
    }
}
