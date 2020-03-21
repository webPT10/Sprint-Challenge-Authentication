const supertest = require("supertest")
const db = require("../database/dbConfig")
const server = require("../index")

test("sanity", () => {
    expect(2 + 2).toBe(4);
  });

  // Register
test("Register User", async () => {
    const res = await supertest(server)
      .post("/auth/register")
      .send({
        username: "Mini2",
        password: "stuff"
      });
    expect(res.statusCode).toBe(201);
    expect(res.type).toBe("application/json");
    expect(res.body.username).toBe("Mini2");
  });

  test("Failure to Register", async () => {
    const res = await supertest(server)
      .post("/auth/register")
      .send({});
    expect(res.statusCode).toBe(400);
    expect(res.type).toBe("application/json");
  });

// test("register-auth-test", async() => {
//         const res = await supertest(server)
//             .post("/register")
//             .send({ username: "TJ", password: "gun" })
//         expect(res.statusCode).toBe(201)
//         expect(res.type).toBe("application/json")
//         expect(res.body.username).toBe("TJ")
//     })

// test("login-auth-test", async() => {
//         const res = await supertest(server)
//             .post("/login")
//             .send({ username: "Ford", password: "stairs!" })
//         expect(res.statusCode).toBe(200)
//         expect(res.type).toBe("application/json")
//         expect(res.body.username).toBe("Ford")
//     })

// afterAll(async () => {
//     await db.destroy()
// })