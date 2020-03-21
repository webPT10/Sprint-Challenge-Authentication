const supertest = require("supertest")
const db = require("../database/dbConfig")
const server = require("../index")

beforeEach(async () => {
    await db.seed.run()    
  })

test("JOKES - sanity", () => {
    expect(4 + 4).toBe(8);
  });

//   // Jokes End Point
test("Restriction failure", async () => {
    const res = await supertest(server).get("/jokes");
    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe("RESTRICTED - invalid credentials");
  });
  
  test("get all jokes", async () => {
    const res = await supertest(server)
      .post("/auth/register")
      .send({username: "Foster",password: "3!"});
    
    const resAgain = await supertest(server)
      .get("/jokes")
      .send({ authorization: res.body.token });
    expect(res.statusCode).toBe(201);
    expect(res.type).toBe("application/json");
  });

  afterAll(async () => {
    await db.destroy()
  })