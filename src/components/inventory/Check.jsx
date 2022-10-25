import { deepOrange } from "@mui/material/colors";
import Checkbox from "@mui/material/Checkbox";

export const Check = ({ title, labelFor, checked, func }) => {
  return (
    <div>
      <label htmlFor={labelFor}>{title}</label>
      {/* <input type="checkbox" name={labelFor} checked={checked} onClick={func} /> */}
      <Checkbox
        size="small"
        sx={{
          color: deepOrange[800],
          "&.Mui-checked": {
            color: deepOrange[600],
          },
        }}
        onClick={func}
        checked={checked}
      />
    </div>
  );
};
