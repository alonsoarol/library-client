/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { PageBanner } from "../components/PageBanner";
import { NewBookForm } from "../components/inventory/NewBookForm";
import { InventoryTable } from "../components/inventory/InventoryTable";
import { BsBook } from "react-icons/bs";
import { useState } from "react";
import { Modal } from "../components/common/Modal";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import { BsQuestionCircle } from "react-icons/bs";

export const Inventory = () => {
  const [stateModal, setStateModal] = useState(false);
  return (
    <>
      <PageBanner
        title="Inventory"
        icon={<BsBook />}
        icon2={<BsQuestionCircle />}
      />

      <div className="appBody inventory-page">
        <div>
          <Fab
            size="small"
            color="warning"
            aria-label="add"
            css={css`
              background: #626b78;
              margin: 20px;
              :hover {
                background: #33373e;
              }
            `}
            onClick={() => setStateModal(!stateModal)}
          >
            <AddIcon />
          </Fab>
          <Modal
            children={<NewBookForm close={setStateModal} />}
            shortCut={113}
            state={stateModal}
            setState={setStateModal}
          ></Modal>
        </div>
        <InventoryTable />
      </div>
    </>
  );
};
