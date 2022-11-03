import { useQuery } from "react-query";
import { getBooks } from "../../api/queries";
import { TableChecks } from "./TableChecks";
import { useEffect, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import HistoryIcon from "@mui/icons-material/History";

import { InventoryTh } from "../inventory/InventoryTh";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { DropMenu } from "../common/DropMenu";

export const InventoryTable = () => {
  const [uri, setUri] = useState(null);
  const [asc, setAsc] = useState(true);

  const { data, error, isLoading } = useQuery(["getBooks", uri, asc], getBooks);
  useEffect(() => {
    isLoading ? setOpen(true) : setOpen(false);
  }, [isLoading]);
  const [open, setOpen] = useState(false);

  const [checks, setChecks] = useState({
    author: true,
    category: true,
    provider: true,
    base_price: true,
    public_price: true,
    stock: true,
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="inventory-outer-wrapper">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <div className="inventory-table-wrapper">
        <table className="inventory-table">
          <thead>
            <tr>
              <InventoryTh
                title="code"
                onClick={() => {
                  setUri("code");
                  setAsc(!asc);
                }}
                isAsc={asc ? true : false}
                isTarget={uri === "code"}
              />
              <InventoryTh
                title="title"
                onClick={() => {
                  setUri("title");
                  setAsc(!asc);
                }}
                isAsc={asc ? true : false}
                isTarget={uri === "title"}
              />
              {checks.author && (
                <InventoryTh
                  title="author"
                  onClick={() => {
                    setUri("author");
                    setAsc(!asc);
                  }}
                  isAsc={asc ? true : false}
                  isTarget={uri === "author"}
                />
              )}
              {checks.category && (
                <InventoryTh
                  title="category"
                  onClick={() => {
                    setUri("category");
                    setAsc(!asc);
                  }}
                  isAsc={asc ? true : false}
                  isTarget={uri === "category"}
                />
              )}
              {checks.provider && (
                <InventoryTh
                  title="provider"
                  onClick={() => {
                    setUri("provider");
                    setAsc(!asc);
                  }}
                  isAsc={asc ? true : false}
                  isTarget={uri === "provider"}
                />
              )}
              {checks.base_price && (
                <InventoryTh
                  title="base price"
                  onClick={() => {
                    setUri("base_price");
                    setAsc(!asc);
                  }}
                  isAsc={asc ? true : false}
                  isTarget={uri === "base_price"}
                />
              )}
              {checks.public_price && (
                <InventoryTh
                  title="public price"
                  onClick={() => {
                    setUri("public_price");
                    setAsc(!asc);
                  }}
                  isAsc={asc ? true : false}
                  isTarget={uri === "public_price"}
                />
              )}
              {checks.stock && (
                <InventoryTh
                  title="stock"
                  onClick={() => {
                    setUri("stock");
                    setAsc(!asc);
                  }}
                  isAsc={asc ? true : false}
                  isTarget={uri === "stock"}
                />
              )}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isLoading
              ? null
              : data.map((book, index) => (
                  <tr key={index} onDoubleClick={() => console.log()}>
                    <td>{book.code}</td>
                    <td>{book.title}</td>
                    {checks.author && <td>{book.author}</td>}
                    {checks.category && <td>{book.category}</td>}
                    {checks.provider && <td>{book.provider}</td>}
                    {checks.base_price && <td>${book.base_price}</td>}
                    {checks.public_price && <td>${book.public_price}</td>}
                    {checks.stock && <td>{book.stock}</td>}
                    <td>
                      {
                        <DropMenu
                          btnIcon={<MoreVertIcon sx={{ color: "white" }} />}
                          menuItems={[
                            {
                              title: "Delete",
                              icon: <DeleteIcon />,
                              action: () => {
                                console.log("item deleted");
                              },
                            },
                            {
                              title: "Edit",
                              icon: <ModeIcon />,
                              action: () => {
                                console.log("item edited");
                              },
                            },
                            {
                              title: "History",
                              icon: <HistoryIcon />,
                              action: () => {
                                console.log("item history");
                              },
                            },
                          ]}
                        ></DropMenu>
                      }
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
      <TableChecks setChecks={setChecks} checks={checks} />
    </div>
  );
};
