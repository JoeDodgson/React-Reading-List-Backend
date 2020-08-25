const db = require("../models");

// Methods for the booksController
module.exports = {
  findAll: async (req, res) => {
    try {
      const results = await db.Book.find(req.query);
      return res.json(results);
    }
    catch (err) {
      console.log(`ERROR: booksController.js - findAll() - ${err}`);
      return res.status(422).json(err);
    }
  },
  
  create: async (req, res) => {
    try {
      const results = await db.Book.create(req.body);
      return res.json(results);
    }
    catch (err) {
      console.log(`ERROR: booksController.js - create() - ${err}`);
      return res.status(422).json(err);
    }
  },
  
  remove: async (req, res) => {
    try {
      const removed = await db.Book.remove({ id: req.params.id });
      return res.json(removed);
    }
    catch (err) {
      console.log(`ERROR: booksController.js - remove() - ${err}`);
      return res.status(422).json(err);
    }
  }
};
