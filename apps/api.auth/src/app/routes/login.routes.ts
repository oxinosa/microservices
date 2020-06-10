import * as express from "express";
const router = express.Router();
import { config } from "@krab/config";

router.get("/", (_req: express.Request, res: express.Response) => {
  res.redirect(
    `http://localhost:${config.fusionAuthPort}/oauth2/authorize?client_id=${config.clientID}&redirect_uri=${config.redirectURI}&response_type=code&scope=openid offline_access`
  );
});

export default router;
