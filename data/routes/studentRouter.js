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

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const student = req.body;
  db.alter(id, student)
    .then(() => {
      res.status(201).json({ message: "Student successfully updated. Woo!!" });
    })
    .catch(() => {
      res.status(500).json({
        error: "Something went wrong, Could not update the student :("
      });
    });
});

router.post("/", (req, res) => {
  const student = req.body;
  db.place(student)
    .then(student => {
      res
        .status(201)
        .json({ message: "Student successfully added to the database" });
    })
    .catch(() => {
      res.status(500).json({
        error: "Could not add the student to the database. Please try again."
      });
    });
});

module.exports = router;
