import * as express from 'express';
const router = express.Router();
import { config } from '@krab/config';

router.get('/', (_req: express.Request, res: express.Response) => {
  // end FusionAuth session
  res.redirect(
    `http://localhost:${config.fusionAuthPort}/oauth2/logout?client_id=${config.clientID}`
  );
});

export default router;
