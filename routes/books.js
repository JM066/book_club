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

router.get("/", function(req, res, next) {
  return getItems(req, res);
});

router.get("/:id", function(req, res, next) {
  db(`SELECT * FROM books WHERE id = ${req.params.id};`)
    .then(results => {
      res.send(results.data);
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
