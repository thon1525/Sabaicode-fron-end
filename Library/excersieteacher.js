class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(...book) {
    this.books = [...this.books, ...book];
    console.log("Book added successfully");
  }

  removeBook(title) {
    const lowertitle = title.toLowerCase();
    const bookToRemove = this.books.findIndex(
      (book) => book.title.toLowerCase() === lowertitle
    );
    console.log("Index of book to remove", bookToRemove);
    if (bookToRemove == -1) {
      console.log(`${title} not found`);
    } else {
      this.books.splice(bookToRemove, 1);
      console.log(`${title} remove successfully`);
    }
  }

  removeBookByFilter(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }

  searchBook(searchType) {
    const search = this.books.filter((item) => {
      if (
        item.title == searchType ||
        item.author == searchType ||
        item.genre == searchType
      ) {
        return item;
      }
    });
    if (search.length > 0) {
      return search;
    } else {
      return `${searchType} not found`;
    }
  }
  displayAvailable() {
    const display = this.books.filter((book) => book.available);
    return display;
  }
  borrowBook(borrow){
    //   const book = this.books.find(book => book.title === borrow );
    const book = this.books.filter((item)=>{
        return item.title === borrow
    })
    book.map((item)=>{
        if(item.available){
            item.available=false;
            console.log("==========================borrowed")
            console.log(`'${item.title}' has borrowed`);
        }else{
            console.log(`"${item.title}" currently not available.`);
        }
    })
      
    console.log(borrow)
   }
   // return borrow in library 
   returnBook(returnBook){
  
    if(returnBook){
       const book = this.books.filter((item)=>{
           return item.title == returnBook
       })
       book.map((item)=>{
           if(!item.available){
               item.available=true;
               console.log("==========returned============")
               console.log(`'${item.title}' has returned in ${this.name}`);
           }else{
               console.log(`"${item.title}" currently not available ${this.name}.`);
           }
       })

    }else{
       console.log(`this book not owned by ${this.name} library`)
    }
   }
}

class Book {
  constructor(title, author, genre, available) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.available = available;
  }
  getInfor() {
    return `${this.title}, written by ${this.author}, (${this.genre})`;
  }
}

class User {
  constructor(name) {
    this.name = name;
    this.borrowed_book = [];
  }
  borrowbookuser(library, bookTitle) {
    const bookToBorrow = library.books.find((book) => book.title === bookTitle);
    if (bookToBorrow && bookToBorrow.available) {
      bookToBorrow.available = false;
      this.borrowed_book.push(bookToBorrow);
      console.log(`${this.name} borrowed ${bookTitle} successfully.`);
    } else {
      console.log(`${bookTitle} is not available or not found.`);
    }
  }

  returnBookUser(library, bookTitle) {
    // Check if the book belong to that library
    const bookBelongTolib = library.books.find(
      (book) => book.title === bookTitle
    );
    if (bookBelongTolib) {
      // Check if the user really borrow that book before
      const bookReturn = this.borrowed_book.find(
        (book) => book.title === bookTitle
      );
      if (bookReturn) {
        bookBelongTolib.available = true;
        this.borrowed_book = this.borrowed_book.filter(
          (item) => item.title !== bookTitle
        );
        console.log(`${this.name} has returned the book: ${bookTitle}`)
      } else {
        console.log(`${bookTitle} is not borrow by ${this.name}`);
      }
    }else {
      console.log(`${bookTitle} does not owned by the libray`);
    }
  }

  viewborrowedbooks() {
    console.log(`${this.name} borrowed :`); 
    return this.borrowed_book
  }
}

// Initiate a new library
const library = new Library("Royal University of Phnom Penh");
const technoLib = new Library("Techno")

// Initiate a new book
const firstBook = new Book("A", "Gege", "Action", true);
const firstBook1 = new Book("B", "Gge", "Action", true);
const firstBook2 = new Book("C", "Gge", "Action", true);

// Add the book to the library
console.log("===================================");
console.log("Add Books");
console.log("===================================");
library.addBook(firstBook, firstBook1, firstBook2);

// Remove the book from the library
// console.log("===================================");
// console.log("After Remove Books");
// console.log("===================================");
// library.removeBookByFilter("A");
// console.log(library )
// Search for books in the library

console.log("===================================");
console.log("Search Book");
console.log("===================================");
console.log(library.searchBook("ABC"));

console.log("===================================");
console.log("Display All Available Books in library");
console.log("===================================");
console.log(library.displayAvailable());
console.log("===================================");
library.borrowBook("B") 
library.returnBook("B")
console.log("User");
const user1 = new User("Thorn");
user1.borrowbookuser(library, "A");

user1.returnBookUser(library, "B");
console.log(user1.viewborrowedbooks());

