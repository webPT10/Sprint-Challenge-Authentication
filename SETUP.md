# STEP UP 

## INSTALLS 1
- npm install
- PACKAGE.JSON > 
    >> Scripts, add:
        > "start": "node index"
        > "test": _______

## INSTALL > dotnev
- npm i dotenv ( --save-dev ?)
- create dotenv file
    > JWT_SECRET="xxxxx"

- update package.json @ 
    > "scripts": {
    "server": "nodemon -r dotenv/config index.js",   

    > pass this into creating a new JWT > 
        > const token = jwt.sign(payload, process.env.JWT_SECRET)

## FILE STRUCTURE 1 > index file
- touch server.js
- server.js > add: 
    const express = require("express")
    const welcomeRouter = require("./welcome/welcomeRouter")
    const server = express()
    const port = process.env.PORT || 4000
    server.use(express.json())
    server.use("/", welcomeRouter)
    server.use((err, req, res, next) => {
        console.log(err)
        res.status(500).json({
            message: "Something went wrong",
        })
    })
    server.listen(port, () => {
        console.log(`Running at http://localhost:${port}`)
    })

## FILE STRUCTURE 2
- mkdir welcome && touch welcome/welcomeRouter.js
    > welcomeRouter.js > add : 
        const express = require("express")
        const router = express.Router()
        router.get("/", (req, res, next) => {
            res.json({
                message: "Welcome to node-db-challenge",
            })
        })
        module.exports = router

- mkdir >  users
- touch > 
    users/usersRouter.js 
    users/usersModel.js 
    
- npm run server

## INSTALL > BCRYPTJS
> npm i bcryptjs

## INSTALL > JSON WEB TOKEN
- npm i jsonwebtoken
- create payload > 
    > const payload = {
        userId: user.id, 
        userRole: "normal", // normally comes from a database
    }
- create jwt > 
    > const token = jwt.sign(payload,"nsno" ) // nsno is the secret key

## INSTALL > cookie-parser
- npm i cookie-parser

<<<<>>>>

## User > router & model
- set up basic structure > 
    >> Model : 
        const db = require("../data/config")
        module.exports = {}

    >> Router :
        const express = require("express")
        const Users = require("./userModel")
        const router = express.Router({
        mergeParams:true
        })
        module.exports = router;
---
## INSTALL > jest
> npm i --save-dev jest