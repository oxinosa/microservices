import * as express from "express";
const router = express.Router();
import { config } from "@krab/config";
import * as request from "request";

router.get("/", (req, res) => {
  request(
    // POST request to /token endpoint
    {
      method: "POST",
      uri: `http://localhost:${config.fusionAuthPort}/oauth2/token`,
      form: {
        "client_id": config.clientID,
        "client_secret": config.clientSecret,
        "code": req.query.code,
        "grant_type": "authorization_code",
        "redirect_uri": config.redirectURI,
      },
    },

    // callback
    (error, response, body) => {
      console.log(JSON.parse(body));
      res.redirect(
        `http://localhost:${config.clientPort}/callback?q=true&access_token=${
          JSON.parse(body).access_token
        }&refresh_token=${JSON.parse(body).refresh_token}`
      );
    }
  );
});

export default router;
