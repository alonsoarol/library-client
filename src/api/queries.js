import axios from "axios";

export const getBooks = async ({ queryKey }) => {
  console.log(queryKey);
  if (queryKey[1]) {
    const response = await axios.get(
      `http://localhost:4000/books/${queryKey[1]}/${
        queryKey[2] ? "asc" : "desc"
      }`
    );
    return response.data;
  }
  const response = await axios.get("http://localhost:4000/books");
  return response.data;
};

export const getBook = async (uri) => {
  const response = await axios.get("http://localhost:4000/book");
  return response.data;
};

export const createBook = async (newBook) => {
  await axios.post("http://localhost:4000/book", newBook);
};

export const deleteBook = async (id) => {
  await axios.delete(`http://localhost:4000/libros/${id}`);
};
