const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Handle request for "/api/books" route
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// Handle request for "/api/books/:id" route
router.route("/:id")
  .delete(booksController.remove);

module.exports = router;
