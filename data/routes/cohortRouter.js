const express = require("express");
const router = express.Router();
const db = require("../knex-db/knex-db");

router.get("/", (req, res) => {
  db.pull()
    .then(cohorts => {
      res.json(cohorts);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Couldn't snag the cohorts from the database :(" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    db.pullById(id)
      .then(cohort => {
        res.json(cohort);
      })
      .catch(() => {
        res.status(500).json({
          error: "We couldn't find this cohort in our database!"
        });
      });
  }
});

router.get("/:id/students", (req, res) => {
  const { id } = req.params;
  if (id) {
    db.pullByCohortId(id)
      .then(students => {
        res.json(students);
      })
      .catch(() => {
        res
          .status(500)
          .json({ error: "Couldn't retrieve the student from the database!" });
      });
  }
});


module.exports = router;
