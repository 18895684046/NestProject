import { Injectable } from '@nestjs/common';
interface Swipe {
  uuid: number,
  imgUrl: string
}
@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSwipList(): Swipe[] {
    const imgList = [
      {
        uuid: Math.random() * 6,
        imgUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210F2130512J47-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665481740&t=0bfa9f3d1f071e8381f14a1e858fa2d6"
      },
      {
        uuid: Math.random() * 6,
        imgUrl: "https://img1.baidu.com/it/u=1546227440,2897989905&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
      },
      {
        uuid: Math.random() * 6,
        imgUrl: "https://img0.baidu.com/it/u=747797291,1321739150&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
      },
      {
        uuid: Math.random() * 6,
        imgUrl: "https://img0.baidu.com/it/u=3643895624,2552772604&fm=253&fmt=auto&app=120&f=JPEG?w=1200&h=675"
      },
    ]
    return imgList
  }
}
