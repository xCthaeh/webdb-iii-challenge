exports.seed = function(knex, Promise) {
  return knex("cohorts")
    .truncate()
    .then(function() {
      return knex("cohorts").insert([
        { name: "iOS3", track: "iOS Development" },
        { name: "web19", track: "Full Stack Web Development" },
        { name: "and2", track: "Android Development" }
      ]);
    });
};
