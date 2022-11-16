import {
  Avatar,
  Divider,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

export const CustomersListRow = ({
  user,
  index,
  selectedIndex,
  setSelectedIndex,
  setTargetUser,
}) => {
  const handleListItemClick = () => {
    setSelectedIndex(index);
    setTargetUser(user);
  };

  return (
    <>
      <ListItemButton
        selected={selectedIndex === index}
        onClick={handleListItemClick}
      >
        <ListItemIcon>
          <Avatar alt={`${user.surname} ${user.surname}`} src={user.picture} />
        </ListItemIcon>
        <ListItemText primary={`${user.name} ${user.surname}`} />
      </ListItemButton>
      <Divider />
    </>
  );
};
