const server = require('./api/server.js');
const express = require("express")
const welcomeRouter = require("./welcome/welcomeRouter")
const authRouter = require("./auth/auth-router")
const jokeRouter = require("./jokes/jokes-router")

const cookieParser = require("cookie-parser")

const PORT = process.env.PORT || 3300;

server.use(express.json())
server.use(cookieParser())

server.use('/', welcomeRouter)
server.use('/', authRouter)
server.use('/jokes', jokeRouter)

server.use((error, req, res) => {
  console.log(error)
  res.status(500).json({
    message: "Something went wrong. Good luck."
  })
})

if (!module.parent){ // supertest
  server.listen(PORT, () => {
    console.log(`\n=== Server listening on port ${PORT} ===\n`);
  });
}
module.exports = server