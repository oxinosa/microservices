/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from "express";
import * as cors from "cors";

import TestRoutes from "./app/routes/test.routes";
import LoginRoutes from "./app/routes/login.routes";
import LogoutRoutes from "./app/routes/logout.routes";
import UserRoutes from "./app/routes/user.routes";
import OauthRediretcRoutes from "./app/routes/oauthRedirect.routes";
import RegisterRoutes from "./app/routes/register.routes";

import { Auth } from "@krab/auth";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/login", LoginRoutes);
app.use("/logout", LogoutRoutes);
app.use("/user", Auth(), UserRoutes);
app.use("/oauth-callback", OauthRediretcRoutes);
app.use("/register", RegisterRoutes);

app.use(`/api/test`, Auth(), TestRoutes);

const port = process.env.AUTH_API_PORT || 3333;

const server = app.listen(port, () => {
  console.log(`auth.api listening at http://localhost:${port}/api`);
});

server.on("error", console.error);
