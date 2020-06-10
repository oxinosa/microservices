import { Request, NextFunction, Response, response } from "express";
import { config } from "@krab/config";
import * as request from "request";

export interface AuthReponse extends Response {
  token: string;
}

export const Auth = () => {
  return async (req: Request, res: AuthReponse, next: NextFunction) => {
    try {
      const { authorization } = req.headers;
      if (!authorization) {
        throw new Error("You must send an Authorization header");
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      const [authType, token] = authorization.trim().split(" ");
      if (authType !== "Bearer") {
        return res.sendStatus(403);
      }

      // TODO: make a request to /api/jwt/validate to see if its valid
      request(
        {
          method: "GET",
          uri: `http://localhost:${config.fusionAuthPort}/api/jwt/validate`,
          headers: {
            Authorization: "Bearer " + token,
          },
        },
        (_error, response) => {
          if (response.statusCode !== 200) {
            return res.sendStatus(403);
          }
          res.token = token;
          next();
        }
      );
    } catch (error) {
      next(error.message);
    }
  };
};
