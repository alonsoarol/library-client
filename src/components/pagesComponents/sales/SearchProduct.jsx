import { Stack } from "@mui/system";
import React, { useState } from "react";
import { useQuery } from "react-query";
import { CustomInput } from "../../common/CustomInput";
import { SalesCustomSelect } from "./SalesCustomSelect";
import { getBooks } from "../../../api/books.queries";
import { RiBarcodeFill } from "react-icons/ri";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";

export const SearchProduct = () => {
  const { data, isLoading } = useQuery(["getBooks"], getBooks);
  const [searched, setSearched] = useState("");
  const [targetProduct, setTargetProduct] = useState("");
  return (
    <Stack direction="row" spacing={2}>
      <CustomInput
        placeholder="code"
        icon={<RiBarcodeFill />}
        size="sm"
        onChange={(e) => setSearched(e.target.value)}
        value={searched}
      />
      <SalesCustomSelect
        icon={<AutoStoriesIcon />}
        options={
          isLoading
            ? [{ title: "loading books.." }]
            : data.filter((item) => item.code.includes(searched))
        }
        // change={setSelectProduct}
        width="20"
        size="m"
        onChange={(e) => {
          setTargetProduct({
            ...targetProduct,
            [e.target.name]: e.target.value,
          });
          console.log(e.target.value);
        }}
        onBlur={(e) => {
          setTargetProduct({
            ...targetProduct,
            [e.target.name]: e.target.value,
          });
          console.log(targetProduct);
        }}
        onFocus={(e) => {
          setTargetProduct({
            ...targetProduct,
            [e.target.name]: e.target.value,
          });
          console.log(targetProduct);
        }}
      />
    </Stack>
  );
};
