import * as express from 'express';
const router = express.Router();
import { config } from '@krab/config';

router.get('/', (_req: express.Request, res: express.Response) => {
  res.send({ message: 'Welcome to api.auth!' });
});

export default router;
