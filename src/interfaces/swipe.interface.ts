import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class Swipe extends Document {
    @Prop()
    @ApiProperty({
        description: "图片地址",
        example: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp09%2F210F2130512J47-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1665481740&t=0bfa9f3d1f071e8381f14a1e858fa2d6"
    })
    readonly imgUrl: string;
}