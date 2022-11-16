import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useNavigate } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

export const GoBack = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  return (
    <Stack justifyContent="center" alignItems="start">
      <IconButton
        onClick={goBack}
        sx={{
          backgroundColor: "black",
          color: "white",
          marginLeft: 3,
          marginTop: 3,
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
    </Stack>
  );
};

export default GoBack;
