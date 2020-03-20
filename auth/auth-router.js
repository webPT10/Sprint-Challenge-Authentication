const router = require('express').Router();
const bcrypt = require("bcryptjs")
const Users = require("../users/usersModel")

const jwt = require("jsonwebtoken")

// POST	/register
// Creates a user using the information sent inside the body of the request.
// Hash the password before saving the user to the database.
//-------------------
router.post('/register', (req, res) => {
  // implement registration
});

// POST	/api/login
// Use the credentials sent inside the body to authenticate the user.
// On successful login, create a new session for the user and send back a 'Logged in' message and a cookie that contains the user id.
// If login fails, respond with the correct status code and the message: 'You shall not pass!'
//-------------------
router.post('/login', (req, res) => {
  // implement login
});

module.exports = router;
