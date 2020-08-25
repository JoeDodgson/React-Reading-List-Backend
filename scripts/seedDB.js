// Require in npm modules and local files
const mongoose = require("mongoose");
const db = require("../models");

// Connect to the live Mongoose database or a local Mongoose database
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/googlebooks"
);

// Define a seed array of books
const bookSeed = [
  {
    id: "1",
    title: "The Dead Zone",
    authors: "Stephen King",
    description: "A number-one national best seller about a man who wakes up from a five-year coma able to see people's futures and the terrible fate awaiting mankind in The Dead Zone - a \"compulsive page-turner\" (The Atlanta Journal-Constitution). Johnny Smith awakens from a five-year coma after his car accident and discovers that he can see people's futures and pasts when he touches them. Many consider his talent a gift; Johnny feels cursed. His fiancée married another man during his coma, and people clamor for him to solve their problems. When Johnny has a disturbing vision after he shakes the hand of an ambitious and amoral politician, he must decide if he should take drastic action to change the future. The Dead Zone is a \"faultlessly paced...continuously engrossing\" (Los Angeles Times) novel of second sight.",
    image: "http://books.google.com/books/content?id=dWOBSwQwgfIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    infoLink: "https://books.google.co.uk/books?id=dWOBSwQwgfIC&dq=intitle:test&hl=&source=gbs_api",
    date: new Date(Date.now())
  },
  {
    id: "2",
    title: "Lord of the Flies",
    authors: "William Golding",
    description: "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    image: "http://books.google.com/books/content?id=dWOBSwQwgfIC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    infoLink: "https://books.google.co.uk/books?id=dWOBSwQwgfIC&dq=intitle:test&hl=&source=gbs_api",
    date: new Date(Date.now())
  }
];

// Remove all items from the Book Mongoose model then insert the seed array of books
db.Book
  .remove({})
  .then(() => db.Book.collection.insertMany(bookSeed))
  // Console log the resulting number of records inserted
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
