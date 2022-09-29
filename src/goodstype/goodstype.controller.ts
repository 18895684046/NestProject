import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { GoodstypeService } from './goodstype.service'
import { GoodsType } from 'src/interfaces/goodstype.interface'

@Controller('goodstype')
@ApiTags("首页商品类型")
export class GoodstypeController {
    constructor(private goodsTypeService: GoodstypeService) { }
    @Post()
    @ApiOperation({
        summary: "生成类型",
    })
    async addGoodsType(@Body() goodsTypeDto: GoodsType) {
        return await this.goodsTypeService.insertType(goodsTypeDto);
    }

    @Get('/all')
    @ApiOperation({
        summary: "获取所有类型",
    })
    async findTypes() {
        return await this.goodsTypeService.findType()
    }
}