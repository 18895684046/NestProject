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
      data: [
        {
          iconUrl: 'http://127.0.0.1:5000/001.png',
          text: '京东超市',
        },
        {
          iconUrl: 'http://127.0.0.1:5000/002.png',
          text: '京东电器',
        },
        {
          iconUrl:'http://127.0.0.1:5000/003.png',
          text: '京东新百货',
        },
        {
          iconUrl:'http://127.0.0.1:5000/004.png',
          text: '免费水果',
        },
        {
          iconUrl: 'http://127.0.0.1:5000/005.png',
          text: '京东到家',
        },
        {
          iconUrl: 'http://127.0.0.1:5000/006.png',
          text: '生活缴费',
        },
        {
          iconUrl: 'http://127.0.0.1:5000/007.png',
          text: '领京豆',
        },
        {
          iconUrl: 'http://127.0.0.1:5000/008.png',
          text: '领券',
        },
        {
          iconUrl: 'http://127.0.0.1:5000/009.png',
          text: '借钱',
        },
        {
          iconUrl: 'http://127.0.0.1:5000/010.png',
          text: 'PLUS会员',
        },
      ]
    }
    return allGoodsType
  }
  getSwipList(): SwipeObj {
    const imgListObj = {
      data: [
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
    }
    return imgListObj
  }
}
