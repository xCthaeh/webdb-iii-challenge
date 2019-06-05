const knex = require("./node_modules/knex");
const config = require("../../knexfile.js");
const db = knex(config.development);

const pull = () => {
  return db("cohorts");
};

const pullByCohortId = id => {
  return db("students").where({ cohort_id: id });
};

const pullById = id => {
  return db("cohorts").where({ id: id });
};

const alter = (id, cohort) => {
  return db("cohorts")
    .where({ id: id })
    .update(cohort);
};

const place = cohort => {
  return db("cohorts")
    .insert(cohort)
    .then(ids => ({ id: ids[0] }));
};

const clear = id => {
  return db("cohorts")
    .where({ id })
    .del();
};

module.exports = {
  pull,
  pullByCohortId,
  pullById,
  alter,
  place,
  clear
};
