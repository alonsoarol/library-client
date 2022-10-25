import { useState } from "react";
import { useBooksStore } from "../../context/bookStore";
import { Input } from "../common/Input";

export const NewBookForm = ({ setstate }) => {
  const createNewBook = useBooksStore((state) => state.addBook);
  const [newBook, setNewBook] = useState({
    code: "",
    title: "",
    author: "",
    category: "",
    provider: "",
    base_price: "",
    public_price: "",
    stock: "",
  });
  const handlerSubmit = (e) => {
    e.preventDefault();
    createNewBook(newBook);
    setstate(newBook);
  };
  return (
    <div className="form-container">
      <form onSubmit={handlerSubmit} className="inventory-form">
        <Input
          type="text"
          title="code"
          color="black"
          onChange={(e) => setNewBook({ ...newBook, code: e.target.value })}
        />
        <Input
          type="text"
          title="title"
          color="black"
          onChange={(e) => setNewBook({ ...newBook, title: e.target.value })}
        />
        <Input
          type="text"
          title="author"
          color="black"
          onChange={(e) => setNewBook({ ...newBook, author: e.target.value })}
        />
        <Input
          type="text"
          title="category"
          color="black"
          onChange={(e) => setNewBook({ ...newBook, category: e.target.value })}
        />
        <Input
          type="text"
          title="provider"
          color="black"
          onChange={(e) => setNewBook({ ...newBook, provider: e.target.value })}
        />
        <Input
          type="number"
          title="base price"
          color="black"
          onChange={(e) =>
            setNewBook({ ...newBook, base_price: e.target.value })
          }
        />
        <Input
          type="number"
          title="public price"
          color="black"
          onChange={(e) =>
            setNewBook({ ...newBook, public_price: e.target.value })
          }
        />
        <Input
          type="number"
          title="stock"
          color="black"
          onChange={(e) => setNewBook({ ...newBook, stock: e.target.value })}
        />

        <button className="btn-newBookForm">create</button>
      </form>
    </div>
  );
};
