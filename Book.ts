/**
 * Represents a book in the library.
 */
class Book {
    /**
    * The title of the book.
    */
    public title: string;
   /**
   * The author of the book.
   */
    public author: string;
    /**
   * The ISBN number of the book.
   */
    public isbn: string;
    /**
   * Whether the book is currently available for borrowing.
   */
  
    public isAvailable: boolean;
   /**
   * Creates a new Book instance.
   *
   * @param title The title of the book.
   * @param author The author of the book.
   * @param isbn The ISBN number of the book.
   */
    constructor(title: string, author: string, isbn: string) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.isAvailable = true;
    }
  }
  
  export default Book;
  