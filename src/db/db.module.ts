import { Global, Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { UserSchema } from "./schema/user.schema";
import { GoodsTypeSchema } from './schema/goodstype.schema'
import { SwipeSchema } from "./schema/swipe.schema";

const MONGO_MODELS = MongooseModule.forFeature([
  {
    name: "USER_MODEL",
    schema: UserSchema,
    collection: "user",
  },
]);

const MONGO_GOODS_TYPEMODELS = MongooseModule.forFeature([
  {
    name: "GOODS_TYPE_MODEL",
    schema: GoodsTypeSchema,
    collection: "goodstype",
  },
]);

const SWIPE_MODELS = MongooseModule.forFeature([
  {
    name: "SWIPE_MODELS",
    schema: SwipeSchema,
    collection: "swipe",
  },
]);

@Global()
@Module({
  imports: [
    MongooseModule.forRoot(
      "mongodb://127.0.0.1:27017/dbname"
    ),
    MONGO_MODELS,
    MONGO_GOODS_TYPEMODELS,
    SWIPE_MODELS
  ], 
  exports: [MONGO_MODELS,MONGO_GOODS_TYPEMODELS,SWIPE_MODELS],
})
export class DbModule { }