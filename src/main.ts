import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 1.引入NestExpressApplication
import { NestExpressApplication } from '@nestjs/platform-express'

//swagger
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  // 2.加入到create
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors();//node设置跨域
  // 3.配置静态资源目录
  app.useStaticAssets('public');

  //swagger config
  const config = new DocumentBuilder()
    .setTitle("Cats example")
    .setDescription("The cats API description")
    .setVersion("1.0")
    .addTag("cats")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("swagger", app, document);
  await app.listen(5000);
}
bootstrap();
