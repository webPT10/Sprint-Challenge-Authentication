const bcrypt = require("bcryptjs")
const db = require("../database/dbConfig")

function find(){
    return db("users")
        .select("id", "username")
}

function findBy(filer) {
    return db("users")
        .where(filers)
        .select("id", "username", "password")
}

//register
async function add(user){
    user.password = await bcrypt.hash(user.password, 14)
    const [id] = await db("users").insert(user)
    return findBy(id)
}

function findById(id) {
    return db("users")
        .where({ id })
        .first("id", "username")
}

module.exports = {
    add,
    find,
    findBy,
    findById
}

