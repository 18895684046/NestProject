import { Injectable } from '@nestjs/common';
interface Swipe {
  name:string,
  imgUrl:string
}
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSwipList():Swipe[]{
    const imgList = [
      {
        name:"第一张111111",
        imgUrl:"test11"
      },
      {
        name:"第一张",
        imgUrl:"test"
      },
      {
        name:"第一张",
        imgUrl:"test"
      },
    ]
    return imgList
  }
}
