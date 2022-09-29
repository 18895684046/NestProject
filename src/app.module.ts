import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { UserModule } from './user/user.module';
import { GoodstypeService } from './goodstype/goodstype.service';
import { GoodstypeController } from './goodstype/goodstype.controller';
import { SwipeService } from './swipe/swipe.service';
import { SwipeController } from './swipe/swipe.controller';
import { SwipeModule } from './swipe/swipe.module';
import { GoodstypeModule } from './goodstype/goodstype.module';

@Module({
  imports: [DbModule, UserModule, GoodstypeModule, SwipeModule],
  controllers: [AppController, GoodstypeController, SwipeController],
  providers: [AppService, GoodstypeService, SwipeService],
})
export class AppModule {
  // configure(consumer:MiddlewareConsumer){
  //   consumer.apply().forRoutes()
  // }
}
