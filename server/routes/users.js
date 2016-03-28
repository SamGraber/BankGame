var express = require('express');
var router = express.Router();

/*
 * GET userlist.
 */
router.get('/', function(req, res) {
    var db = req.db;
    var collection = db.get('users');
    collection.find({},{},function(e,docs){
        res.json(docs);
    });
});

router.post('/login', function(req, res) {
	var db = req.db;
	var users = db.get('users');
	users.find({ 'username': req.body.username }, {}, function(e, docs) {
		console.log(docs);]
		res.json(docs);
	});
});

module.exports = router;