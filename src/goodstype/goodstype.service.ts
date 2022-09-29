import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { GoodsType } from "src/interfaces/goodstype.interface";
@Injectable()
export class GoodstypeService {
    constructor(
        @InjectModel("GOODS_TYPE_MODEL") private readonly goodsTypeModel: Model<GoodsType>
    ) { }

    /**
  * @description: 生成首页商品类型方法
  * @param {GoodsType} goodstype
  * @return {*}
  */
    public async insertType(goodstype: GoodsType) {
        return this.goodsTypeModel
            .findOne({
                text: goodstype.text
            })
            .then((res) => {
                if (res) {
                    console.log('该类型已经存在');
                    throw Error('该类型已经存在')
                }
            })
            .then(() => {
                try {
                    const createGoodsType = new this.goodsTypeModel(goodstype)
                    return createGoodsType.save()
                } catch (error) {
                    throw Error("保存类型失败" + error);
                }
            })
            .catch((err) => {
                console.warn(`发生问题--${err}`);
            });
    }

    /**
 * @description: 获取首页商品类型方法
 * @param {} 
 * @return {*}
 */
    public async findType() {
        return this.goodsTypeModel.find({})
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

