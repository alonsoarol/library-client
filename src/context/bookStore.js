import axios from "axios";
import create from "zustand";

const bookStore = (set) => ({
  // books: [],
  // updateBooks: async () => {
  //   const response = await axios.get("http://localhost:4000/books");
  //   await set((state) => ({ books: response.data }));
  // },
  addBook: async (newBook) => {
    await axios.post("http://localhost:4000/libros", newBook);
  },
  deleteBook: async (id) => {
    await axios.delete(`http://localhost:4000/libros/${id}`);
    bookStore.updateBooks();
  },
});

export const useBooksStore = create(bookStore);
