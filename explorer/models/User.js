const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
//you may replace this 'name' field with anything you like
firstName: {
    type: String,
    trim: true,
    required: "First Name is Required"
},

lastName: {
    type: String,
    trim: true,
    required: "Last Name is Required"
},

password: {
	type: String,
	trim: true,
	required: "Password is required",
	validate: [
		function(input) {
		  return input.length >= 6;
		},
		"Password should be longer."
	  ]
},

email: {
    type: String,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
},

userCreated: {
    type: Date,
    default: Date.now
  }
	
});
//passport-local-mongoose creates a 'username' and some 'password' fields for you
//you can add some other fields here too if you like

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);