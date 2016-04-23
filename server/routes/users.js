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
	users.findOne({ 'username': req.body.username }, {}, function(e, user) {
		if (user) {
			if (user.password === req.body.password) {
				res.json(user);
				return;
			}
			res.status(500).send('Incorrect password');
			return;
		}
		res.status(500).send('No user with that username exists');
	});
});

router.post('/register', function(req, res) {
	var db = req.db;
	var users = db.get('users');
	users.insert(req.body, function(e, user) {
		res.json(user);
	});
});

module.exports = router;