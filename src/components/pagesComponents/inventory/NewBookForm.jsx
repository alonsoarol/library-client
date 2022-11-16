import { useEffect, useState, useRef } from "react";
import { CustomInput } from "../../common/CustomInput";
import { CustomSelect } from "../../common/CustomSelect";
import { CustomButton } from "../../common/CustomButton";
import { RiBarcodeFill } from "react-icons/ri";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { BsTruck } from "react-icons/bs";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { createBook } from "../../../api/books.queries";
import { getProviders } from "../../../api/providers.queries";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export const NewBookForm = ({ close }) => {
  const codeRef = useRef("");
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(["getProviders"], getProviders);

  const {
    mutate,
    error,
    isLoading: isMutating,
    reset,
    isError,
  } = useMutation(createBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("getBooks");
      enqueueSnackbar("book registered succesfully", {
        variant: "success",
      });
      close(false);
      // useNavigate("/inventory");
      reset();
    },
    onError: (error) => {
      enqueueSnackbar(error.response.data, { variant: "error" });
      reset();
      codeRef.current.focus();
    },
  });
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
  const handlerChange = ({ target }) => {
    setNewBook({ ...newBook, [target.name]: target.value });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    const obj = {
      code: newBook.code,
      title: newBook.title,
      author: newBook.author,
      category: newBook.category,
      provider: newBook.provider,
      base_price: newBook.base_price,
      public_price: newBook.public_price,
      stock: newBook.stock,
    };
    mutate(obj);
  };

  return (
    <div className="form-container">
      <form onSubmit={handlerSubmit} className="inventory-form">
        <CustomInput
          icon={<RiBarcodeFill />}
          Ref={codeRef}
          placeholder="code"
          type="text"
          name="code"
          size="ls"
          onChange={(e) => handlerChange(e)}
        />
        <CustomInput
          icon={<AutoStoriesIcon />}
          placeholder="title"
          type="text"
          name="title"
          size="ls"
          onChange={(e) => handlerChange(e)}
        />
        <CustomInput
          icon={<PersonOutlineIcon />}
          placeholder="author"
          type="text"
          name="author"
          size="ls"
          onChange={(e) => handlerChange(e)}
        />
        <CustomInput
          icon={<AutoStoriesIcon />}
          placeholder="category"
          type="text"
          name="category"
          size="ls"
          onChange={(e) => handlerChange(e)}
        />
        <CustomSelect
          icon={<BsTruck />}
          placeholder="provider"
          size="s"
          name="provider"
          width={20}
          options={isLoading ? null : data}
          onChange={(e) => handlerChange(e)}
        />
        <CustomInput
          icon={<AttachMoneyIcon />}
          placeholder="base price"
          type="number"
          name="base_price"
          size="ls"
          onChange={(e) => handlerChange(e)}
        />
        <CustomInput
          icon={<AttachMoneyIcon />}
          placeholder="public price"
          type="number"
          name="public_price"
          size="ls"
          onChange={(e) => handlerChange(e)}
        />
        <CustomInput
          // icon={<AttachMoneyIcon />}
          placeholder="stock"
          type="number"
          name="stock"
          size="ls"
          onChange={(e) => handlerChange(e)}
        />

        <CustomButton title="Add" width="10vw" height="5vh" />
      </form>
    </div>
  );
};
