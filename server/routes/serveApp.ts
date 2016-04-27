import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/*', (request: express.Request, response: express.Response): void => {
  response.render('../../index.html');
});

export { router };
