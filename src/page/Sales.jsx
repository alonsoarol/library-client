/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useRef, useEffect } from "react";
import { useQuery, useMutation } from "react-query";
import { getBooks } from "../api/books.queries";
import { createSale } from "../api/sales.queries";
import { useLoginStore } from "../context/loginStore";
import { useSnackbar } from "notistack";
import { PageBanner } from "../components/PageBanner";
import { CustomButton } from "../components/common/CustomButton";
import { CustomInput } from "../components/common/CustomInput";
import { SalesCustomSelect } from "../components/pagesComponents/sales/SalesCustomSelect";
import IconButton from "@mui/material/IconButton";

import { Fab, Stack } from "@mui/material";
import { BsCart3 } from "react-icons/bs";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SpokeIcon from "@mui/icons-material/Spoke";
import AddIcon from "@mui/icons-material/Add";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DeleteIcon from "@mui/icons-material/Delete";

export const Sales = () => {
  const totalRef = useRef("");
  const dateRef = useRef("");
  const amountRef = useRef("");

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const userLogued = useLoginStore((state) => state.connectedUser);
  const { data, isLoading } = useQuery(["getBooks"], getBooks);
  const { mutate, context } = useMutation(createSale, {
    onSuccess: () => {
      enqueueSnackbar("sales registered succesfully", {
        variant: "success",
      });
    },
    onError: () => {
      enqueueSnackbar(error.response.data, { variant: "error" });
    },
  });

  const [selectProduct, setSelectProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  const handlerSubmit = () => {
    if (!userLogued.permissions.write) {
      return enqueueSnackbar("you have not permissions", {
        variant: "warning",
      });
    }
    let arr = [];
    products.map((item) => {
      if (item.amount > 1) {
        for (let i = 0; i < item.amount; i++) {
          arr.push(item.id);
        }
      } else {
        arr.push(item.id);
      }
    });
    const obj = {
      employee: userLogued._id,
      amount_items: arr.length,
      sold_items: arr,
      total: total,
      date: `${new Date().getFullYear()}-${
        new Date().getMonth() + 1
      }-${new Date().getDate()}`,
    };
    mutate(obj);
    setProducts([]);
    setTotal(0);
    amountRef.current.value = 1;
    amountRef.current.focus();
  };

  const addNewSale = () => {
    const obj = {
      id: selectProduct._id,
      code: selectProduct.code,
      title: selectProduct.title,
      amount: amountRef.current.value,
      public_price: selectProduct.public_price,
      total: (
        parseFloat(selectProduct.public_price) *
        parseInt(amountRef.current.value)
      ).toFixed(2),
    };
    setProducts([...products, obj]);
    setTotal((parseFloat(obj.total) + parseFloat(total)).toFixed());
  };

  useEffect(() => {
    if (Object.entries(selectProduct).length === 0) {
      if (!isLoading) {
        return setSelectProduct(data[0]);
      }
      return;
    }
    return;
  }, [data]);
  return (
    <>
      <PageBanner title="Sales" icon={<BsCart3 />} />
      <Stack
        width="100%"
        maxHeight="100vh"
        gridArea="appbody"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: "linear-gradient(to right, #33373E, #F1F3F7)",
        }}
      >
        <Stack
          width={1000}
          height={500}
          border="2px solid "
          borderRadius={4}
          bgcolor="#c5c5c5"
        >
          <Stack
            direction="row"
            width="100%"
            spacing={2}
            flex={1}
            justifyContent="left"
            alignItems="center"
            ml={3}
          >
            <CustomInput
              placeholder="customer"
              icon={<PersonOutlineIcon />}
              size="ms"
              disabled
              value={userLogued.email}
            />
            <CustomInput
              placeholder="date"
              icon={<DateRangeIcon />}
              size="ms"
              disabled
              value={`${new Date().getFullYear()}-${
                new Date().getMonth() + 1
              }-${new Date().getDate()}`}
              Ref={dateRef}
            />
          </Stack>
          <Stack
            direction="row"
            width="100%"
            spacing={2}
            flex={1}
            justifyContent="left"
            alignItems="center"
            ml={3}
          >
            <SalesCustomSelect
              icon={<AutoStoriesIcon />}
              options={isLoading ? [{ title: "loading books.." }] : data}
              width="20"
              size="m"
              onFocus={(e) => setSelectProduct(JSON.parse(e.target.value))}
              onBlur={(e) => setSelectProduct(JSON.parse(e.target.value))}
              onChange={(e) => setSelectProduct(JSON.parse(e.target.value))}
            />
            <CustomInput
              placeholder="amount"
              icon={<SpokeIcon />}
              size="sm"
              Ref={amountRef}
              type="number"
              defval={1}
            />
            <Fab
              size="small"
              sx={{
                backgroundColor: "black",
                color: "white",
                "&:hover": { backgroundColor: "#33373e" },
              }}
              onClick={addNewSale}
            >
              <AddIcon />
            </Fab>
          </Stack>
          <Stack direction="row" width="100%" spacing={2} flex={4}>
            <Stack
              flex={2}
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <h2>Orders</h2>
              <Stack
                bgcolor="black"
                color="white"
                width="90%"
                height="80%"
                borderRadius={4}
                overflow="auto"
              >
                <table
                  css={css`
                    border-collapse: collapse;
                    & > thead > tr > th {
                      height: 5vh;
                      padding-left: 10px;
                      text-align: left;
                      position: sticky;
                      top: 0;
                      background: #1976d2;
                    }
                    & > tbody > tr > td {
                      padding: 10px;
                    }
                  `}
                >
                  <thead>
                    <tr>
                      <th>code</th>
                      <th>title</th>
                      <th>amount</th>
                      <th>u. price</th>
                      <th>total</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {products ? (
                      products.map((item, index) => (
                        <tr key={index}>
                          <td>{item.code}</td>
                          <td>{item.title}</td>
                          <td>{item.amount} u.</td>
                          <td>$ {item.public_price}</td>
                          <td>$ {item.total}</td>
                          <td>
                            <IconButton
                              aria-label="delete"
                              sx={{ color: "white" }}
                              onClick={() => {
                                setProducts(
                                  products.filter((product) => {
                                    return product !== item;
                                  })
                                );
                                setTotal(
                                  (
                                    parseFloat(total) - parseFloat(item.total)
                                  ).toFixed()
                                );
                              }}
                            >
                              <DeleteIcon />
                            </IconButton>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={5}>There is no product added</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </Stack>
            </Stack>
            <Stack
              flex={1}
              justifyContent="flex-start"
              alignItems="center"
              spacing={2}
            >
              <h2>Payment</h2>
              <Stack
                border="2px solid black"
                borderRadius={4}
                justifyContent="center"
                alignItems="center"
                width="70%"
                height="80%"
                spacing={1}
              >
                <label>pay</label>
                <CustomInput icon={<AttachMoneyIcon />} size="ss" />
                <label>total</label>
                <CustomInput
                  icon={<AttachMoneyIcon />}
                  size="ss"
                  disabled
                  value={total}
                  Ref={totalRef}
                />
                <label>balance</label>
                <CustomInput icon={<AttachMoneyIcon />} />
                <Stack pt={1}>
                  <CustomButton
                    title="Submit"
                    size="ss"
                    onClick={handlerSubmit}
                  />
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
