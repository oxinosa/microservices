import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Page } from "../schemas/page.schema";
import { CreatePageDto } from "../models/DTO/CreatePageDto";
import { Model } from "mongoose";

@Injectable()
export class PageService {
  constructor(@InjectModel(Page.name) private pageModel: Model<Page>) {}

  async create(createPageDto: CreatePageDto): Promise<Page> {
    const createdAt = new this.pageModel(createPageDto);
    return createdAt.save();
  }

  async findAll(): Promise<Page[]> {
    return this.pageModel.find().exec();
  }
}
