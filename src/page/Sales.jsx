import { PageBanner } from "../components/PageBanner";
import { BsCart3 } from "react-icons/bs";
import { CustomButton } from "../components/common/CustomButton";
import { CustomInput } from "../components/common/CustomInput";
import { SalesCustomSelect } from "../components/sales/SalesCustomSelect";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DateRangeIcon from "@mui/icons-material/DateRange";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import SpokeIcon from "@mui/icons-material/Spoke";
import { RiBarcodeFill } from "react-icons/ri";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { useState, useRef } from "react";
import { useQuery } from "react-query";
import { getBooks } from "../api/queries";

export const Sales = () => {
  const [selectProduct, setSelectProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const codeRef = useRef();
  const amountRef = useRef();
  const { data, isLoading } = useQuery(["getBooks"], getBooks);

  const handlerSubmit = () => {
    const obj = {
      code: selectProduct.code,
      title: selectProduct.title,
      amount: amountRef.current.value,
      base_price: selectProduct.base_price,
      public_price: selectProduct.public_price,
      total: (
        parseFloat(selectProduct.public_price) *
        parseInt(amountRef.current.value)
      ).toFixed(2),
    };
    setProducts([...products, obj]);
    setTotal((parseFloat(total) + parseFloat(obj.total)).toFixed(2));
  };

  return (
    <>
      <PageBanner title="Sales" icon={<BsCart3 />} />

      <div className="appBody salesPage">
        <div className="card-form">
          <div className="form-container">
            <div className="form1">
              <CustomInput
                placeholder="customer"
                icon={<PersonOutlineIcon />}
                size="ss"
              />
              <CustomInput
                placeholder="date"
                icon={<DateRangeIcon />}
                size="ss"
              />
            </div>
            <div className="form2">
              <CustomInput
                placeholder="code"
                icon={<RiBarcodeFill />}
                size="sm"
                Ref={codeRef}
              />
              <SalesCustomSelect
                icon={<AutoStoriesIcon />}
                options={isLoading ? [{ title: "loading books.." }] : data}
                change={setSelectProduct}
                width="20"
                size="m"
              />
              <CustomInput
                placeholder="amount"
                icon={<SpokeIcon />}
                size="sm"
                Ref={amountRef}
              />
              <Fab
                size="small"
                onClick={handlerSubmit}
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  "&:hover": { backgroundColor: "#33373e" },
                }}
              >
                <AddIcon />
              </Fab>
            </div>
          </div>
          <div className="tables-container">
            <div className="table1">
              <h3>Order</h3>
              <div className="table-wrapper">
                <table>
                  <div className="divisorTable"></div>
                  <thead>
                    <tr>
                      <th>Code</th>
                      <th>Products</th>
                      <th>Amount</th>
                      <th>Price</th>
                      <th>Total</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.length !== 0 ? (
                      products.map((item, index) => (
                        <tr key={index}>
                          <td>{item.code}</td>
                          <td>{item.title}</td>
                          <td>{item.amount} u.</td>
                          <td>${item.public_price}</td>
                          <td>${item.total}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6}>There are not any product</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="table2">
              <h3>Payment</h3>
              <div className="payment-wrapper">
                <label>pay</label>
                <CustomInput icon={<AttachMoneyIcon />} />
                <label>total</label>
                <CustomInput icon={<AttachMoneyIcon />} val={total} />
                <label>balance</label>

                <CustomInput icon={<AttachMoneyIcon />} />
                <CustomButton title="Submit" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
