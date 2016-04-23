var express = require('express');
var router = express.Router();

/*
 * GET accounts.
 */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('accounts');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

router.get('/:id', function(req, res) {
    var db = req.db;
    var collection = db.get('accounts');
    collection.find({ '_id': req.params.id },{},function(e,account){
        if (account) {
			res.json(account);
		}
		res.status(500).send('The specified account was not found');
    });
});



module.exports = router;