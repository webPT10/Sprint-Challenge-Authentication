const supertest = require("supertest")
const db = require("./database/dbConfig")
const server = require("./index")

test("welcome route", async() => {
    const res = await supertest(server).get("/")

    expect(res.statusCode).toBe(200)
    expect(res.type).toBe("application/json")
    expect(res.body.message).toBe("Welcome to the Welcome Router.")
    expect(res.body.message).toHaveLength(30)
    expect(res.body.message).toMatch(/welcome/i)
})

// test("create users router", async() => {
//         const res = await supertest(server)
//             .post("/api/users")
//             .send({ name: "Trigger" })
//         expect(res.statusCode).toBe(201)
//         expect(res.type).toBe("application/json")
//         expect(res.body.name).toBe("Trigger")
//     })