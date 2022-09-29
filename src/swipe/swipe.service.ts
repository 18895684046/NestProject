import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Swipe } from "src/interfaces/swipe.interface";
@Injectable()
export class SwipeService {
    constructor(
        @InjectModel("SWIPE_MODELS") private readonly swipeModel: Model<Swipe>
    ) { }

    /**
  * @description: 添加轮播图数据
 * @param {swipeType} Swipe
 * @return {*}
 */
    public async addSwipe(swipeType: Swipe) {
        const createGoodsType = new this.swipeModel(swipeType)
        return createGoodsType.save()
    }

    // 获取轮播图数据
    public async findSwipe() {
        return this.swipeModel.find({})
            .then((res) => {
                if (res) {
                    return { data: res }
                }
            })
            .catch((err) => {
                console.warn(`发生问题--${err}`);
            });
    }
}