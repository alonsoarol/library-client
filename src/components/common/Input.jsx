import TextField from "@mui/material/TextField";

export const Input = ({ title, color, onChange, type }) => {
  return (
    <>
      <TextField
        type={type}
        autoComplete="off"
        onChange={onChange}
        label={title}
        variant="standard"
        size="small"
        sx={{
          margin: 0,
          padding: 0,
          fontSize: 2,
          width: 130,
          "& .MuiInputLabel-root": {
            color: `${color}`,
            fontSize: 12,
          },
          "& .Mui-focused": {
            color: `${color}`,
          },
          "& .Mui-focused:after": {
            borderBottomColor: `${color}`,
            color: `${color}`,
          },
          "& .css-1ptx2yq-MuiInputBase-root-MuiInput-root:after": {
            borderBottomColor: `${color}`,
            color: `${color}`,
          },
        }}
      />
    </>
  );
};
