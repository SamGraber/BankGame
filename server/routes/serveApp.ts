import * as express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/*', (req, response): void => {
  response.render('../../index.html');
});

export { router };
