import { SchemaFactory } from "@nestjs/mongoose";
import { GoodsType } from "src/interfaces/goodstype.interface";

export const GoodsTypeSchema = SchemaFactory.createForClass(GoodsType);