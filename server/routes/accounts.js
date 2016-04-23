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
    var accounts = db.get('accounts');
    accounts.find({ '_id': req.params.id },{},function(e,account){
        if (account) {
			res.json(account);
			return;
		}
		res.status(500).send('The specified account was not found');
    });
});

router.post('/new', function(req, res) {
	var db = req.db;
	var users = db.get('users');
	var accounts = db.get('accounts');
	users.findOne({ 'username': req.body.username }, {}, function(err, user) {
		if (user) {
			accounts.insert({ 'balance': 0 }, function(err, account) {
				users.update({ 'username': req.body.username }, { '$set': { 'accountId': account._id }}, function(err, updatedUser) {
					res.json(account);
				});
			});
		}
	});
});

module.exports = router;