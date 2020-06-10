import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { passportJwtSecret } from "jwks-rsa";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKeyProvider: passportJwtSecret({
        jwksUri: "http://localhost:9011/.well-known/jwks.json",
      }),
      algorithms: ["RS256"],
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async validate(payload: any) {
    return {
      userId: payload.sub,
      username: payload.email,
      roles: payload.roles,
    };
  }
}
