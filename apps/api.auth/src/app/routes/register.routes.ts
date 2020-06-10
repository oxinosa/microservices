import * as express from "express";
const router = express.Router();
import { config } from "@krab/config";
import * as request from "request";

router.post("/", (req, res) => {
  // TODO: Add validation
  const { email, password, userName } = req.body;

  request(
    {
      method: "POST",
      uri: `http://localhost:${config.fusionAuthPort}/api/user/registration`,
      headers: {
        Authorization: config.apiKey,
      },
      json: true,
      body: {
        registration: {
          applicationId: config.applicationID,
        },
        user: {
          passwordChangeRequired: false,
          usernameStatus: "ACTIVE",
          email: email,
          username: userName,
          password: password,
        },
      },
    },
    (error) => {
      if (error) {
        res.status(403).send(error);
      }
      res.status(200).send({});
    }
  );
});

export default router;
