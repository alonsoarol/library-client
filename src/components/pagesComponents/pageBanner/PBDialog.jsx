import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import DialogTitle from "@mui/material/DialogTitle";

export const PBDialog = ({ title, textContent, open, close, func }) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      PaperProps={{
        sx: {
          backgroundColor: "black",
          color: "white",
          width: "30vw",
          height: "20vh",
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{textContent}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Stack direction="row" spacing={3}>
          <Button onClick={func} autoFocus variant="outlined">
            Agree
          </Button>
          <Button onClick={close} variant="outlined">
            Disagree
          </Button>
        </Stack>
      </DialogActions>
    </Dialog>
  );
};
