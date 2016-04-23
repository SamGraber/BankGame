const __expressImport = require('express');
const router = __expressImport.Router();

/* GET home page. */
router.get('/*', (req, response): void => {
  response.render('../../index.html');
});

module.exports = router;
