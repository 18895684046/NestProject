import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 1.引入NestExpressApplication
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
  // 2.加入到create
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();//node设置跨域
  // 3.配置静态资源目录
  app.useStaticAssets('public');
  await app.listen(5000);
}
bootstrap();
