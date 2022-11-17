import { useEffect, useState, useRef } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { updateBook } from "../../../api/books.queries";
import { useSnackbar } from "notistack";

import { CustomInput } from "../../common/CustomInput";
import { CustomButton } from "../../common/CustomButton";

import { RiBarcodeFill } from "react-icons/ri";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { BsTruck } from "react-icons/bs";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export const EditBookForm = ({ close, item }) => {
  const { enqueueSnackbar } = useSnackbar();
  const { mutate } = useMutation(updateBook, {
    onSuccess: () => {
      enqueueSnackbar("Book updated succesfully", { variant: "success" });
      queryClient.invalidateQueries("getBooks");
    },
    onError: () => {
      enqueueSnackbar("Something was wrong", { variant: "error" });
    },
  });
  const queryClient = useQueryClient();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (
      !basePriceRef.current.value ||
      !publicPriceRef.current.value ||
      !stockRef.current.value
    ) {
      enqueueSnackbar("llename el campo pa", { variant: "warning" });
      basePriceRef.current.focus();
      return;
    }
    const obj = {
      id: item._id,
      data: {
        base_price: basePriceRef.current.value,
        public_price: publicPriceRef.current.value,
        stock: stockRef.current.value,
      },
    };
    mutate(obj);

    close(false);
  };

  const basePriceRef = useRef("");
  const publicPriceRef = useRef("");
  const stockRef = useRef("");

  useEffect(() => {
    if (item) {
      basePriceRef.current.value = item.base_price;
      publicPriceRef.current.value = item.public_price;
      stockRef.current.value = item.stock;
      basePriceRef.current.focus();
    }
  }, [item]);

  return (
    <div className="form-container">
      <form onSubmit={handlerSubmit} className="inventory-form">
        <CustomInput
          icon={<RiBarcodeFill />}
          val={item && item.code}
          placeholder="code"
          type="text"
          name="code"
          size="ls"
          disabled
        />
        <CustomInput
          icon={<AutoStoriesIcon />}
          placeholder="title"
          type="text"
          name="title"
          size="ls"
          val={item && item.title}
          disabled
        />
        <CustomInput
          icon={<PersonOutlineIcon />}
          placeholder="author"
          type="text"
          name="author"
          size="ls"
          val={item && item.author}
          disabled
        />
        <CustomInput
          icon={<AutoStoriesIcon />}
          placeholder="category"
          type="text"
          name="category"
          size="ls"
          val={item && item.category}
          disabled
        />
        <CustomInput
          icon={<BsTruck />}
          placeholder="provider"
          type="text"
          name="provider"
          size="ls"
          val={item && item.provider.name}
          disabled
        />

        <CustomInput
          icon={<AttachMoneyIcon />}
          placeholder="base price"
          type="number"
          name="base_price"
          size="ls"
          Ref={basePriceRef}
        />
        <CustomInput
          icon={<AttachMoneyIcon />}
          placeholder="public price"
          type="number"
          name="public_price"
          size="ls"
          Ref={publicPriceRef}
        />
        <CustomInput
          placeholder="stock"
          type="number"
          name="stock"
          size="ls"
          Ref={stockRef}
        />

        <CustomButton title="Add" width="10vw" height="5vh" />
      </form>
    </div>
  );
};
