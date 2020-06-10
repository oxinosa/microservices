import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Page, PageSchema } from "../schemas/page.schema";
import { PageService } from "../services/page.service";
import { PageController } from "../controllers/page.controller";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Page.name, schema: PageSchema }]),
  ],
  controllers: [PageController],
  providers: [PageService],
})
export class PageModule {}
