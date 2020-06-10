import { Controller, Get, UseGuards, Request } from "@nestjs/common";
import { AppService } from "./app.service";
import { JwtAuthGuard, RolesGuard, Roles, RoleEnum } from "@krab/be.util.auth";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(RoleEnum.USER)
  getData(@Request() req) {
    return req.user;
    //return this.appService.getData(req.userId);
  }
}
