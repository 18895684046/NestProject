import { Prop, Schema } from "@nestjs/mongoose";
import { Document } from "mongoose";
import { ApiProperty } from "@nestjs/swagger";

@Schema()
export class GoodsType extends Document {
  @Prop()
  @ApiProperty({
    description: "图片地址",
    example: "http://127.0.0.1:5000/001.png",
  })
  readonly iconUrl: string;

  @Prop()
  @ApiProperty({
    description: "描述文字",
    example: "京东超市",
  })
  readonly text: string;

}