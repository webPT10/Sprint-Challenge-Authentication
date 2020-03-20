const server = require('./api/server.js');
const express = require("express")

const PORT = process.env.PORT || 3300;

server.use(express.json())

server.use((error, req, res) => {
  console.log(error)
  res.status(500).json({
    message: "Something went wrong. Good luck."
  })
})

server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});
