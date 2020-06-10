/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
  SetMetadata,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { Reflector } from "@nestjs/core";
@Injectable()
export class JwtAuthGuard extends AuthGuard("jwt") {}

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}
  canActivate(context: ExecutionContext): boolean {
    // Grab the roles we want to check against.
    const roles: RoleEnum[] = this.reflector.get<RoleEnum[]>(
      "roles",
      context.getHandler()
    );
    if (!roles) {
      return true;
    }
    const { user } = context.switchToHttp().getRequest();
    roles.forEach((role: string) => {
      if (!user.roles.includes(role)) {
        // SEnd a 403 back to the client
        throw new UnauthorizedException();
      }
    });
    return true;
  }
}

export const Roles = (...roles: RoleEnum[]) => SetMetadata("roles", roles);

export enum RoleEnum {
  USER = "user",
  ADMIN = "admin",
}
