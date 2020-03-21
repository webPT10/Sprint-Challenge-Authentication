
exports.seed = async function(knex) {
  await knex("users").truncate()
  await knex("users").insert([
    { username: "Fitz", password:"treats" },
    { username: "Effie", password: "snacks"},
    { username: "Max", password: "walks"},
    { username: "Snoopy", password:"woodstock"}
  ])
};
