// Class representing a book in the library
class Book {
    constructor(title, author, genre, ISBN) {
      this.title = title;       // Title of the book
      this.author = author;     // Author of the book
      this.genre = genre;       // Genre of the book
      this.ISBN = ISBN;         // Unique identifier for the book
      this.available = true;    // Availability status of the book
    }
  }
  
  // Class representing the library
  class Library {
    constructor(name) {
      this.name = name;         // Name of the library
      this.books = [];          // Array to store books in the library
    }
  
    // Add a new book to the library
    addBook(book) {
      this.books.push(book);
    }
  
    // Remove a book from the library by title or ISBN
    removeBook(identifier) {
      this.books = this.books.filter(
        (book) => book.title !== identifier && book.ISBN !== identifier
      );
    }
  
    // Search for books by title
    searchByTitle(title) {
      return this.books.filter((book) => book.title === title && book.available);
    }
  
    // Search for books by author
    searchByAuthor(author) {
      return this.books.filter(
        (book) => book.author === author && book.available
      );
    }
  
    // Search for books by genre
    searchByGenre(genre) {
      return this.books.filter((book) => book.genre === genre && book.available);
    }
  
    // Display all available books in the library
    displayAvailableBooks() {
      return this.books.filter((book) => book.available);
    }
  
    // Borrow a book from the library
    borrowBook(ISBN, user) {
      const book = this.books.find((book) => book.ISBN === ISBN);
      if (book && book.available) {
        book.available = false;
        user.borrowBook(book);
        return true;
      }
      return false;
    }
  
    // Return a book to the library
    returnBook(ISBN, user) {
      const book = this.books.find((book) => book.ISBN === ISBN);
      if (book) {
        book.available = true;
        user.returnBook(book);
      }
    }
  }
  
  // Class representing a user of the library
  class User {
    constructor(name) {
      this.name = name;             // Name of the user
      this.borrowedBooks = [];      // Array to store borrowed books
    }
  
    // Borrow a book and add it to the borrowed books list
    borrowBook(book) {
      this.borrowedBooks.push(book);
    }
  
    // Return a book and remove it from the borrowed books list
    returnBook(book) {
      this.borrowedBooks = this.borrowedBooks.filter((b) => b.ISBN !== book.ISBN);
    }
  
    // View the list of borrowed books
    viewBorrowedBooks() {
      return this.borrowedBooks;
    }
  }
  
  // Example usage of the library system
  const myLibrary = new Library("City Library");
  
  // Adding books to the library
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", "Novel", "12345");
  const book2 = new Book("1984", "George Orwell", "Dystopian", "67890");
  myLibrary.addBook(book1);
  myLibrary.addBook(book2);
  
  // Creating a user and borrowing a book
  const user1 = new User("Alice");
  myLibrary.borrowBook("12345", user1);// Alice borrows "The Great Gatsby"
  console.log(user1.viewBorrowedBooks()); // Displays borrowed books by Alice