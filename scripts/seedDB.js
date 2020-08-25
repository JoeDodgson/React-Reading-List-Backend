// Require in npm modules and local files
const mongoose = require("mongoose");
const db = require("../models");
const dotenv = require("dotenv");
dotenv.config();

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
    image: "https://books.google.co.uk/books/content?id=DlWQDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE71_jIXgwLe_7qislWwgsIwoEWdhUhp_cHeGEW9XGHvazouynq9ZVMzkKh0nu4NpaAKR3q2XKb3Zr4LX1Xb2U2ePQULSOcOULr1UBV-u_Ze1QI0lv5D-jUPBb610ILogaF2Xs2R8",
    infoLink: "https://books.google.co.uk/books/about/The_Dead_Zone.html?id=DlWQDQAAQBAJ&redir_esc=y",
    date: new Date(Date.now())
  },
  {
    id: "2",
    title: "Lord of the Flies",
    authors: "William Golding",
    description: "The tale of a party of shipwrecked schoolboys, marooned on a coral island, who at first enjoy the freedom of the situation but soon divide into fearsome gangs which turn the paradise island into a nightmare of panic and death.",
    image: "https://books.google.co.uk/books/content?id=lG8dzWV28jsC&printsec=frontcover&img=1&zoom=5&edge=curl&imgtk=AFLRE71WlqL39XUtIX2ncpWxd-4MCqusVYlWJqfgWtNhBDx4mKugq-vPPi3zsuoT_d-BReMx_hl_rOl1tL0wI67USKffpkRs4meIYQU12__m4WysdPWsKXkIgHr68R3f_V_E_JKPqCWJ",
    infoLink: "https://books.google.co.uk/books?id=lG8dzWV28jsC&printsec=frontcover&dq=lord+of+the+flies&hl=en&sa=X&ved=2ahUKEwi66sfulrbrAhWAQRUIHfE2B2oQ6AEwA3oECAkQAg#v=onepage&q=lord%20of%20the%20flies&f=false",
    date: new Date(Date.now())
  },
  {
    id: "3",
    title: "It",
    authors: "Stephen King",
    description: "Welcome to Derry, Maine. It’s a small city, a place as hauntingly familiar as your own hometown. Only in Derry the haunting is real.\nThey were seven teenagers when they first stumbled upon the horror. Now they are grown-up men and women who have gone out into the big world to gain success and happiness. But the promise they made twenty-eight years ago calls them reunite in the same place where, as teenagers, they battled an evil creature that preyed on the city’s children. Now, children are being murdered again and their repressed memories of that terrifying summer return as they prepare to once again battle the monster lurking in Derry’s sewers.",
    image: "https://books.google.co.uk/books/content?id=S85NCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&imgtk=AFLRE709kTIBaql6irDHjobqIzh54uKHzzWAaHlzKo03Bg_TcoIdeGIzsjwPwUmanE7Oml4qrQvT_Yz56qkzZHdrVyif5wleo0NQcjhUwyJTeoMby5Oy3SuRQCUyIAptMqR2FLSz40TQ",
    infoLink: "https://books.google.co.uk/books/about/It.html?id=S85NCwAAQBAJ&redir_esc=y",
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
