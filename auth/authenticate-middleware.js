/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

const jwt = require("jsonwebtoken")

function authenticate(){
  const authError = {
    message: "RESTRICTED - invalid credentials"
  }

  return async (req, res, next) => {
    try {
    // the JWT is being sent automatically from the cookie jar,
    // so this uses the cookie-parser middleware to get the value.
    const { token } = req.cookies
    if(!token){
      return res.status(401).json(authError)
    }

    // verify the token's signature
    jwt.verify(token, process.env.JWT_SECRET,(error, decoded) => {
      if(error){
        return res.status(401).json(authError)
      }
      req.token = decoded
      console.log(decoded)

      next()
    })
    } catch(error){
      next(error)
    }
  }
}
module.exports = authenticate;

// module.exports = (req, res, next) => {
//   res.status(401).json({ you: 'shall not pass!' });
// };
