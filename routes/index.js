var express = require('express');
var router = express.Router();
var dnd = require('../src/scripts/dnd');


router.get('/', function(req, res) {
	console.log('Inside root get');
  res.render('index', { title: 'DND',button_val: 'Add-User',button_script:'javascript:clickAdd()' });
});

router.get('/dnd/:id', function(req, res) {
	var uid = req.params.id
	console.log("Getting user:"+ uid);
	dnd.getUser(uid);
	res.render('index', { title: 'Requesting data for userid:'+req.params.id,button_val: 'Del-User',button_script:'javascript:clickRem('+uid+')' });
	});

router.post('/dnd', function(req,res){
	var usrData = req.body;
	console.log(JSON.stringify(usrData));
	dnd.addUser(usrData.userId,usrData.conv);
	res.send({msg:"Setting DND for:"+usrData.userId});
});

router.delete('/dnd/:id',function(req,res){
	var uid = req.params.id
	console.log("Deleting user:"+ uid);
	dnd.deleteUser(uid);
	res.render('index', { title: uid+'User deleted',button_val: 'Add-User',button_script:'javascript:clickAdd()' });
});


module.exports = router;
