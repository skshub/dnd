
var Firebase = require("firebase");

var dataDB = "https://dazzling-inferno-1717.firebaseio.com/";
var user = "user";
var convo = "conversation";


var convList = new Firebase(dataDB+'/dnd');

var onComplete= function(error){
	if(error){
		console.log('Action failed!');
	} else {
		console.log('Action successful');
	}
};

var dnd = {
		
		addUser: function(userId, convs){
			convList.child(user).child(userId).set(convs,onComplete);
		},
		getUser: function(userId){
			convList.child(user).child(userId).once("value",function(data){
				data.forEach(function(conv){
					console.log(conv.val());
				});
				
			});
		},
		deleteUser: function(userId){
			convList.child(user).child(userId).remove(onComplete);
		}
};

module.exports = dnd;