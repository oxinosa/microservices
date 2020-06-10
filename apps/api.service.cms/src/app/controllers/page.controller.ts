import { Controller, Post, Body, UseGuards, Request } from "@nestjs/common";
import { PageService } from "../services/page.service";
import { CreatePageDto } from "../models/DTO/CreatePageDto";
import { JwtAuthGuard, RolesGuard, Roles, RoleEnum } from "@krab/be.util.auth";

@Controller("page")
export class PageController {
  constructor(private readonly pageService: PageService) {}

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RoleEnum.USER)
  async createPage(@Request() req, @Body() createPageDto: CreatePageDto) {
    createPageDto.authorId = req.user.userId;
    const c = await this.pageService.create(createPageDto);
    console.log(c);
    return c;
  }
}
