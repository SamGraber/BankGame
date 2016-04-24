"use strict";
var express = require('express');
var router = express.Router();
exports.router = router;
/* GET home page. */
router.get('/*', function (req, response) {
    response.render('../../index.html');
});
//# sourceMappingURL=serveApp.js.map