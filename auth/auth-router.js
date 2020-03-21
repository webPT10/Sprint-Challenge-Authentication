const router = require('express').Router();
const bcrypt = require("bcryptjs")
const Users = require("../users/usersModel")
const jwt = require("jsonwebtoken")

// POST	/register
// Creates a user using the information sent inside the body of the request.
// Hash the password before saving the user to the database.
//-------------------
router.post('/register', async (req, res, next) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "error, bad request" });
    }

    const saved = await Users.add(req.body)
    res.status(201).json(saved)
  } catch(error){
    next(error)
  }
});

// POST	/api/login
// Use the credentials sent inside the body to authenticate the user.
// On successful login, create a new session for the user and send back a 'Logged in' message and a cookie that contains the user id.
// If login fails, respond with the correct status code and the message: 'You shall not pass!'
//-------------------
router.post('/login', async (req, res, next) => {
  const authError = {
    message: "Invalid Credentials."
  }

  try {
    const { username, password } = req.body
    if(!username || !password) {
      return res.status(401).json(authError)
    }

    const user = await Users.findBy({ username }).first()
    if(!user){
      return res.status(401).json(authError)
    }

    const passwordValid = await bcrypt.compare(password, user.password)
    if(!passwordValid){
      return res.status(400).json(authError)
    }

    const payload = {
      userId: user.id,
      userRole: "user"
    }

    // generate new JWT & cryptographically sign
    const token = jwt.sign(payload, process.env.JWT_SECRET)

    // sends a Set-Cookie header with the value of the token
    res.cookie("token", token)
    res.json({
      message: `Hello, ${user.username}`
    })

  } catch(error){
    next(error)
  }
});

module.exports = router;
