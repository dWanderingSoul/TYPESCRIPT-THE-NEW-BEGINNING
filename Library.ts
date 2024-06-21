import Book from "./Book.ts";
import User from "./User.ts";
/**
 * Manages the library system, including books and users.
 */
class Library 
/**
 * Manages the library system, including books and users.
 */
{
  private books: Book[];
  /**
   * An array containing all registered users of the library.
   */
  private users: User[];

  /**
   * Creates a new Library instance.
   */
  constructor() 
  {
    this.books = [];
    this.users = [];
  }

  /**
   * Adds a new book to the library.
   *
   * @param book The book to be added.
   */
  public addBook(book: Book): void {
    this.books.push(book);
  }
  /**
   * Removes a book from the library by its ISBN number.
   *
   * @param isbn The ISBN number of the book to be removed.
   */
  public removeBook(isbn: string): void {
    const index = this.books.findIndex((book) => book.isbn === isbn);
    if (index !== -1) {
      this.books.splice(index, 1);
    }
  }
  /**
   * Searches for books based on title, author, or ISBN.
   *
   * @param query The search query string.
   * @returns An array of books matching the search query.
   */
  public searchBook(query: string): Book[] {
    return this.books.filter((book) =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase()) ||
      book.isbn.includes(query)
    );
  }
  /**
   * Adds a new user to the library system.
   *
   * @param user The user to be added.
   */
  public addUser(user: User): void {
    this.users.push(user);
  }
 /**
   * Removes a user from the library system by their ID.
   *
   * @param id The unique identifier of the user to be removed.
   */
  public removeUser(id: number): void {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {  
      this.users.splice(index, 1);
    }
  }
 /**
   * Searches for users based on name or ID.
   *
   * @param query The search query string.
   * @returns An array of users matching the search query.
   */
  public searchUser(query: string): User[] {
    return this.users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase()) ||
      user.id === Number(query)
    );
  }
 /**
   * Allows a user to borrow a book by its ISBN number.
   *
   * @param userId The unique identifier of the user borrowing the book.
   * @param isbn The ISBN number of the book to be borrowed.
   * @returns True if the book was borrowed successfully, false otherwise.
   */
  public borrowBook(userId: number, isbn: string): boolean {
    const user = this.users.find((user) => user.id === userId);
    const book = this.books.find((book) => book.isbn === isbn);
    if (user && book && book.isAvailable) {
      user.borrowedBooks.push(book);
      book.isAvailable = false;
      return true;
    }
    return false;
  }
 /**
 * Allows a user to return a previously borrowed book.
 *
 * @param userId The unique identifier of the user returning the book.
 * @param isbn The ISBN number of the book to be returned.
 * @returns True if the book was returned successfully, false otherwise.
*/
  public returnBook(userId: number, isbn: string): boolean {
    const user = this.users.find((user) => user.id === userId);
    const book = this.books.find((book) => book.isbn === isbn);
    if (user && book) {
      const borrowedIndex = user.borrowedBooks.findIndex(
        (borrowedBook) => borrowedBook.isbn === isbn
      );
      if (borrowedIndex !== -1) {
        user.borrowedBooks.splice(borrowedIndex, 1);
        book.isAvailable = true;
        return true;
      }
    }
    return false;
  }
/**
 * Checks if a book is currently available for borrowing.
 *
 * @param isbn The ISBN number of the book to check.
 * @returns True if the book is available, false otherwise.
 */
  public isBookAvailable(isbn: string): boolean {
    const book = this.books.find((book) => book.isbn === isbn);
    return book?.isAvailable ?? false; // Check for undefined book and return false
  }
}

export default Library;
