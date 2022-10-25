import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export function Modal({ children, shortCut, state, setState }) {
  document.addEventListener("keydown", (e) => {
    if (e.keyCode === shortCut) {
      e.preventDefault();
      openModal();
    }
  });
  const openModal = () => {
    setState(true);
  };
  const closeModal = () => {
    setState(false);
  };
  return (
    <div>
      <Dialog
        open={state}
        onClose={closeModal}
        sx={{
          "& .MuiPaper-root": {
            background: "",
            textAlign: "center",
          },
        }}
      >
        <DialogTitle>Add new book</DialogTitle>
        <DialogContent>{children}</DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
}
