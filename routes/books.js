var express = require('express');
var router = express.Router();
const db = require("../model/helper");

function getItems(req, res) {
  db("SELECT * FROM books ORDER BY id ASC;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
}

// Get title: 
// 1 - put this route before the '/' route, otherwise the router wont arrive here
// 2 - enclose the argument with '', because it is a string
router.get("/title", function(req, res, next) {
  db(`SELECT * FROM books WHERE title = '${req.body.title}';`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/author", function(req, res, next) {
  db(`SELECT * FROM books WHERE author = '${req.body.author}';`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/year/:year", function(req, res, next) {
  db(`SELECT * FROM books WHERE year = '${req.params.year}';`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/genre/:genre", function(req, res, next) {
  db(`SELECT * FROM books WHERE genre = '${req.params.genre}';`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.get("/", function(req, res, next) {
  db("SELECT * FROM books;")
  .then(results => {
    res.send(results.data);
  })
  .catch(err => res.status(500).send(err));
});

router.get("/:id", function(req, res, next) {
  db(`SELECT * FROM books WHERE id = ${req.params.id};`)
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});

router.put("/:id", (req, res) => {
  db(`UPDATE books SET location ='${req.body.location}' WHERE id=${req.params.id};`)
    .then(results => {
      if (results.error) {
        res.status(404).send({ error: results.error });
      } else {
        db("SELECT * FROM books ORDER BY id ASC;")
          .then(results => {
            res.send(results.data);
          })
          .catch(err => res.status(500).send(err));
      }
    })
    .catch(err => res.status(500).send(err));
});

router.delete("/:id", function(req, res, next) {
  db(`DELETE FROM books WHERE id = ${req.params.id};`)
    .then(results => {
      getItems(req, res);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
