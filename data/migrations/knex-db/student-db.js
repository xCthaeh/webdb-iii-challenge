const knex = require("./node_modules/knex");
const config = require("../../knexfile.js");
const db = knex(config.development);

const pull = () => {
  return db("students");
};

const pullById = id => {
  return db("students")
    .from("students")
    .select("name", "id", "track")
    .where({ id: id });
};

const place = student => {
  return db("students")
    .insert(student)
    .then(ids => ({ id: ids[0] }));
};

const alter = (id, student) => {
  return db("students")
    .where({ id: id })
    .update(student);
};

const clear = id => {
  return db("students")
    .where({ id })
    .del();
};

module.exports = {
  pull,
  pullById,
  place,
  alter,
  clear
};
