const express = require("express");
const router = express.Router();
const Author = require("../models/Author");

//get  all authors
router.get("/", (req, res) => {
  res.render("authors/index");
});

// New Author route
router.get("/new", (req, res) => {
  res.render("authors/new", { author: new Author() });
});

// Create Author Router
router.post("/", (req, res) => {
  const author = new Author({
    name: req.body.name
  });
  author.save((err, newAuthor) => {
    if (err) {
      res.render("authors/new", {
        author: author,
        errorMessage: "Error creating author"
      });
    } else {
      res.redirect(`authors/${newAuthor.id}`);
    }
  });
});

module.exports = router;
