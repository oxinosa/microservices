import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "@krab/be.util.auth";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { PageModule } from "./modules/page.module";

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      envFilePath: ".cms.development.env",
    }),
    MongooseModule.forRoot("mongodb://localhost:27017", {
      user: "root",
      pass: "rootpassword",
      dbName: "cms",
      useNewUrlParser: true,
    }),
    PageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
