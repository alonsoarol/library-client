import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeIcon from "@mui/icons-material/Mode";
import HistoryIcon from "@mui/icons-material/History";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getBooks, deleteBook } from "../../../api/books.queries";
import { TableChecks } from "./TableChecks";
import { useEffect, useState } from "react";
import { InventoryTh } from "../inventory/InventoryTh";
import { DropMenu } from "../../common/DropMenu";
import { PBDialog } from "../pageBanner/PBDialog";
import { useSnackbar } from "notistack";
import { EditBookForm } from "../inventory/EditBookForm";
import { Modal } from "../../common/Modal";
import { useLoginStore } from "../../../context/loginStore";

export const InventoryTable = () => {
  const [uri, setUri] = useState(null);
  const [asc, setAsc] = useState(true);
  const [targetBook, setTargetBook] = useState("");
  const [openBackDrop, setOpenBackDrop] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [stateModal, setStateModal] = useState(false);
  const [targedBook, setTargedBook] = useState("");

  const userLogued = useLoginStore((state) => state.connectedUser);
  const { enqueueSnackbar } = useSnackbar();
  const queryClient = useQueryClient();
  const { data, isLoading } = useQuery(["getBooks", uri, asc], getBooks);
  const { mutate } = useMutation(deleteBook, {
    onSuccess: () => {
      queryClient.invalidateQueries("getBooks");
      enqueueSnackbar("Book deleted succesfully", {
        variant: "success",
      });
    },
    onError: () => {
      enqueueSnackbar("Something was wrong", {
        variant: "error",
      });
    },
  });

  const [checks, setChecks] = useState({
    author: true,
    category: true,
    provider: true,
    base_price: true,
    public_price: true,
    stock: true,
  });

  const confirmDeleteBook = () => {
    mutate(targetBook);
    setOpenDialog(false);
    console.log("sdfsdfsdf");
  };

  useEffect(() => {
    isLoading ? setOpenBackDrop(true) : setOpenBackDrop(false);
  }, [isLoading]);

  return (
    <div className="inventory-outer-wrapper">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openBackDrop}
        onClick={() => setOpenBackDrop(false)}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <PBDialog
        title="Are you sure to delete the book?"
        open={openDialog}
        func={() => confirmDeleteBook(targetBook)}
        close={() => setOpenDialog(false)}
      />
      <Modal
        children={<EditBookForm close={setStateModal} item={targedBook} />}
        shortCut={114}
        state={stateModal}
        setState={setStateModal}
        bckg="#c5c5c5"
        title="Edit Book"
      ></Modal>

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
                  <tr key={book._id}>
                    <td>{book.code}</td>
                    <td>
                      {book.title.length > 16
                        ? book.title.slice(0, 14) + "..."
                        : book.title}
                    </td>
                    {checks.author && <td>{book.author}</td>}
                    {checks.category && <td>{book.category}</td>}
                    {checks.provider && <td>{book.provider.name}</td>}
                    {checks.base_price && <td>${book.base_price}</td>}
                    {checks.public_price && <td>${book.public_price}</td>}
                    {checks.stock && <td>{book.stock}</td>}
                    <td>
                      {
                        <>
                          <DropMenu
                            btnIcon={<MoreVertIcon sx={{ color: "black" }} />}
                            menuItems={[
                              {
                                title: "Delete",
                                icon: <DeleteIcon />,
                                action: () => {
                                  if (!userLogued.permissions.write) {
                                    return enqueueSnackbar(
                                      "you have not permissions",
                                      {
                                        variant: "warning",
                                      }
                                    );
                                  }
                                  setTargetBook(book._id);
                                  setOpenDialog(true);
                                },
                              },
                              {
                                title: "Edit",
                                icon: <ModeIcon />,
                                action: () => {
                                  if (!userLogued.permissions.write) {
                                    return enqueueSnackbar(
                                      "you have not permissions",
                                      {
                                        variant: "warning",
                                      }
                                    );
                                  }
                                  setTargedBook(book);
                                  setStateModal(true);
                                },
                              },
                            ]}
                          />
                        </>
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
