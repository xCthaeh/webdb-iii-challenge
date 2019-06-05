const express = require("express");
const router = express.Router();
const db = require("../knex-db/student-db");

router.get("/", (req, res) => {
  db.pull()
    .then(students => {
      res.status(202).json(students);
    })
    .catch(() => {
      res
        .status(500)
        .json({ error: "Could not retrieve the students from the database" });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  if (id) {
    db.pullById(id)
      .then(student => {
        res.status(202).json(student);
      })
      .catch(() => {
        res
          .status(500)
          .json({ error: "Could not retrieve the student from the database" });
      });
  }
});
