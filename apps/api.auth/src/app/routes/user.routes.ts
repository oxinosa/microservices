import * as express from "express";
const router = express.Router();
import { config } from "@krab/config";
import * as request from "request";
import { AuthReponse } from "@krab/auth";

router.get("/", (_req, res: AuthReponse) => {
  if (res.token) {
    request(
      // POST request to /introspect endpoint
      {
        method: "POST",
        uri: `http://localhost:${config.fusionAuthPort}/oauth2/introspect`,
        form: {
          "client_id": config.clientID,
          "token": res.token,
        },
      },

      // callback
      (error, response, body) => {
        const introspectResponse = JSON.parse(body);

        // valid token -> get more user data and send it back to the react app
        if (introspectResponse.active) {
          request(
            // GET request to /registration endpoint
            {
              method: "GET",
              uri: `http://localhost:${config.fusionAuthPort}/api/user/registration/${introspectResponse.sub}/${config.applicationID}`,
              json: true,
              headers: {
                Authorization: config.apiKey,
              },
            },

            // callback
            (error, response, body) => {
              if (error) {
                res.sendStatus(500);
              }
              console.log(body);
              console.log(introspectResponse);
              res.send({
                token: {
                  ...introspectResponse,
                },
                ...body,
              });
            }
          );
        }

        // expired token -> send 403
        else {
          res.sendStatus(403);
        }
      }
    );
  }

  // no token, should happen, would be caught in Auth middleware, but if for some reason it passed then send 403
  else {
    res.sendStatus(403);
  }
});

export default router;
