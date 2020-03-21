const supertest = require("supertest")
const db = require("../database/dbConfig")
const server = require("../index")

test("register-auth-test", async() => {
        const res = await supertest(server)
            .post("/register")
            .send({ username: "Barrel", password: "bored" })
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.username).toBe("Barrel")
    })

// test("login-auth-test", async() => {
//         const res = await supertest(server)
//             .post("/login")
//             .send({ username: "Trigger", password: "shot" })
//         expect(res.statusCode).toBe(201)
//         expect(res.type).toBe("application/json")
//         expect(res.body.username).toBe("Trigger")
//     })

// afterAll(async () => {
//     await db.destroy()
// })