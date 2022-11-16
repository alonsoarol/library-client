import { useLoginStore } from "../context/loginStore";
import Avatar from "@mui/material/Avatar";
import { DropMenu } from "../components/common/DropMenu";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { PBDialog } from "./pagesComponents/pageBanner/PBDialog";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const PageBanner = ({ title, icon, icon2 }) => {
  const [open, setOpen] = useState(false);

  const userLogued = useLoginStore((state) => state.connectedUser);
  const logout = useLoginStore((state) => state.logingOut);
  const navigate = useNavigate();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logOut = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="pageBanner">
      <div className="banner-firstFrame">
        {icon}
        <div className="division-pagebanner"></div>
        <h2>{title}</h2>
      </div>
      <div className="banner-lastFrame">
        {icon2 && icon2}
        <div className="division-pagebanner"></div>
        {!userLogued ? (
          <img src="user.png" />
        ) : (
          <>
            <PBDialog
              title="Are You Sure?"
              open={open}
              close={handleClose}
              func={() => logOut()}
            />
            <DropMenu
              btnIcon={
                <Avatar
                  alt={`${userLogued.surname} ${userLogued.surname}`}
                  src={userLogued.picture}
                  sx={{ width: 50, height: 50 }}
                />
              }
              menuItems={[
                {
                  title: "",
                  icon: "",
                },
                {
                  title: "Profile",
                  icon: <PersonOutlinedIcon />,
                  action: () => {
                    console.log("item deleted");
                  },
                },
                {
                  title: "Logout",
                  icon: <LogoutIcon />,
                  action: () => {
                    handleClickOpen();
                  },
                },
              ]}
            />
          </>

          // <img src={userLogued.picture} className="profile-img" />
        )}
      </div>
    </div>
  );
};
