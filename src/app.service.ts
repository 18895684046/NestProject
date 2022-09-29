import { Injectable } from '@nestjs/common';
interface Swipe {
  uuid: number,
  imgUrl: string
}
interface SwipeObj {
  data: Swipe[]
}
@Injectable()
export class AppService {
  getGoodsType(): any {
    const allGoodsType = {
    }
    return allGoodsType
  }
  getSwipList(): any {
    const imgListObj = {
    }
    return imgListObj
  }
}
