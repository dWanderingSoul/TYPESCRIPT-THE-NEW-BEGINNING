/**
 * Represents a user of the library system.
 */
class User {
     /**
   * The user's name.
   */
    public name: string;
    /**
   * The unique identifier for the user.
   */
    public id: number;
     /**
   * An array containing the books currently borrowed by the user.
   */
    public borrowedBooks: [];
     /**
   * Creates a new User instance.
   *
   * @param name The name of the user.
   * @param id The unique identifier for the user.
   */
  
    constructor(name: string, id: number) {
      this.name = name;
      this.id = id;
      this.borrowedBooks = [];
    }
  }
  
  export default User;
  