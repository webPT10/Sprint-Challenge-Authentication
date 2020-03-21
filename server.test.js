// test("a placeholder test", () => {
//     expect(4+4).toBe(8)
// })

const supertest = require("supertest")

// our server wont actually start due to the if statement in index.js
const server = require("./index")
test("a placeholder test", async () => {
    const res = await supertest(server).get("/")
    console.log(res)
})
// test("a placeholder test", (done) => {
//     expect(2+2).toBe(4)
//     done()
// })
