// Define the Book class
class Book {
  constructor(title, author, genre,ISBN) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.ISBN = ISBN;    
    this.available = true; // Initially, the book is available
  }

  // Method to borrow the book
  
  borrowBook() {
    if (this.available) {
      console.log("================================================")
      this.available = false;
      console.log(`Book "${this.title}" has been borrowed.`);
      console.log("================================================")
    } else {
      console.log(
        `Sorry, the book "${this.title}" is currently not available.`
      );
    }
   
  }

  // Method to return the book
  returnBook() {
    if (!this.available) {
      console.log("================================================")
      this.available = true;
      console.log(`Book "${this.title}" has been returned.`);
      console.log("================================================")
    } else {
      console.log("================================================")
      console.log(
        `Error: This book "${this.title}" is already available. Check for typos or other issues.`
      );
    }
   
  }
}

// Define the Library class
class Library {
  constructor(name, title) {
    this.name = name;
    this.title = title;
    this.books = []; // An array to store Book objects
  }

  // Method to add a book to the library
  addBook(book) {
    this.books.push(book);
    console.log(`Book "${book.title}" has been added to the library.`);
  }
  // remove book in
  
  removeBook(book) {
    const indexToRemove = this.books.findIndex(b => b === book);
  
    if (indexToRemove !== -1) {
      // The book object was found in the array
      this.books.splice(indexToRemove, 1);
      console.log(`Book with title '${book.title}' removed successfully.`);
    } else {
      console.log(`Book with title '${book.title}' not found.`);
    }

  }
  // this search book

  searchBooks(query) {
    const results = this.books.filter((book) => {
      const lowerCaseQuery = query.toLowerCase();
      return (
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        book.author.toLowerCase().includes(lowerCaseQuery) ||
        book.genre.toLowerCase().includes(lowerCaseQuery)
      );
    });
   
    if (results.length > 0) {
      console.log(`Search results for '${query}':`);
      results.forEach((book) => {
        console.log(`- ${book.title} by ${book.author} (${book.genre})`);
      });
    } else {
      console.log(`No results found for '${query}'.`);
    }
  }
  // Method to display all available books in the library
  displayAvailableBooks() {
    // console.log(`Available books in ${this.name} library:`);
    // this.books.forEach((book) => {
    //   if (book.available) {
    //     console.log("###################dhello###################")
    //     console.log(`- ${book.title} by ${book.author}`);
    //   }
    // });
    //const data= this.books.filter((book) => book.available);
    return this.books.filter((book) => book.available);
    //  data.map((item)=>{
    //   if (item.available) {
    //         console.log("###################dhello###################")
    //         console.log(`- ${item.title} by ${item.author}`);
    //       }
    //  })
  }
}
class User {
  constructor(name) {
    this.name = name;
    this.borrowedBooks = [];
  }

  // Method to borrow a book
  borrowBook(library, bookTitle) {
    const results = library.books.filter((book) => {
      const lowerCaseQuery = bookTitle.toLowerCase();
      return (
        book.title.toLowerCase().includes(lowerCaseQuery) ||
        book.author.toLowerCase().includes(lowerCaseQuery) ||
        book.genre.toLowerCase().includes(lowerCaseQuery)
      );
    });
  
   
    const bookToBorrow = results[0];
    if (bookToBorrow && bookToBorrow.available) {
      bookToBorrow.borrowBook();
      this.borrowedBooks.push(bookToBorrow);
      console.log(`${this.name} has borrowed "${bookToBorrow.title}".`);
    } else if (!bookToBorrow) {
      console.log(`Error: Book with title '${bookTitle}' not found.`);
    } else {
      console.log(`Error: "${bookToBorrow.title}" is not available for borrowing.`);
    }
    
  }
  
  // Method to view borrowed books
  viewBorrowedBooks() {
    if (this.borrowedBooks.length > 0) {
      console.log(`${this.name}'s borrowed books:`);
      this.borrowedBooks.forEach((book) => {
        console.log(`- ${book.title} by ${book.author} (${book.genre})`);
      });
    } else {
      console.log(`${this.name} has not borrowed any books.`);
    }
  }
}

// Example usage
const myLibrary = new Library("Beltie Library",false);

const book1 = new Book("lovely", "songvag", "love");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", "Fiction");
const book3 = new Book("storydata", "tha", "it");

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);
// remove book
myLibrary.removeBook(book1);

// search book
myLibrary.searchBooks("Harper Lee")

book1.borrowBook();
//book2.borrowBook();
// book3.borrowBook();

myLibrary.displayAvailableBooks();

//book1.returnBook();
 book2.returnBook();
// book3.returnBook();

myLibrary.displayAvailableBooks();
const user1 = new User("John Doe");

// Borrow books
user1.borrowBook(myLibrary, "To Kill a Mockingbird");
// View borrowed books

user1.viewBorrowedBooks();