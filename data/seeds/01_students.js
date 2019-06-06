exports.seed = function(knex, Promise) {
  return knex("students")
    .truncate()
    .then(function() {
      return knex("students").insert([
        {
          name: "Alyssa Hatfield",
          track: "Full Stack Web Development",
          cohort_id: 2
        },
        {
          name: "Gilberto Castellanos",
          track: "iOS Development.",
          cohort_id: 1
        },
        {
          name: "Bradley Ball",
          track: "Full Stack Web Development",
          cohort_id: 2
        }
      ]);
    });
};
