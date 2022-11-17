// /** @jsxImportSource @emotion/react */
// import { css } from "@emotion/react";

import { PageBanner } from "../components/PageBanner";
import { NewBookForm } from "../components/pagesComponents/inventory/NewBookForm";
import { InventoryTable } from "../components/pagesComponents/inventory/InventoryTable";
import { BsBook } from "react-icons/bs";
import { useState } from "react";
import { Modal } from "../components/common/Modal";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { BsQuestionCircle } from "react-icons/bs";
import { useLoginStore } from "../context/loginStore";
import { useSnackbar } from "notistack";
export const Inventory = () => {
  const [stateModal, setStateModal] = useState(false);
  const userLogued = useLoginStore((state) => state.connectedUser);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  return (
    <>
      <PageBanner
        title="Inventory"
        icon={<BsBook />}
        icon2={<BsQuestionCircle />}
      />

      <div className="inventory-page">
        <div>
          <Fab
            size="small"
            onClick={() => {
              if (!userLogued.permissions.write) {
                return enqueueSnackbar("you have not permissions", {
                  variant: "warning",
                });
              }
              setStateModal(!stateModal);
            }}
            sx={{
              margin: "20px",
              backgroundColor: "black",
              color: "white",
              "&:hover": { backgroundColor: "#33373e" },
            }}
          >
            <AddIcon />
          </Fab>
          <Modal
            children={<NewBookForm close={setStateModal} />}
            shortCut={113}
            state={stateModal}
            setState={setStateModal}
            bckg="#c5c5c5"
            title="Add new book"
          ></Modal>
        </div>
        <InventoryTable />
      </div>
    </>
  );
};
