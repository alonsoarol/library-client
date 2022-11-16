import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import { useState } from "react";

export const DropMenu = ({ btnIcon, menuItems }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <IconButton size="small" onClick={handleClick}>
        {btnIcon}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ "& .MuiPaper-root": { backgroundColor: "black" } }}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            onClick={() => {
              item.action();
              handleClose();
            }}
            key={index + item}
          >
            <ListItemIcon sx={{ color: "white" }}>{item.icon}</ListItemIcon>
            <ListItemText sx={{ color: "white" }}>{item.title}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
