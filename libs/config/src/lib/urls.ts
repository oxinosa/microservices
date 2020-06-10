import { config } from "./config";

const prefix = "http://localhost";

export const urls = {
  TEST_API: `${prefix}:${config.serverPort}/api/test`,
  REGISTER: `${prefix}:${config.serverPort}/register`,
};
