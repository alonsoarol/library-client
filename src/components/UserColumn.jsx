import { useState } from "react";
import { useLoginStore } from "../context/loginStore";
import axios from "axios";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import Fab from "@mui/material/Fab";
import { Input } from "../components/common/Input";
import Button from "@mui/material/Button";

export const UserColumn = () => {
  const [loguer, setLoguer] = useState({ email: "", password: "" });
  const connectedUser = useLoginStore((state) => state.connectedUser);
  const login = useLoginStore((state) => state.login);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:4000/signin", loguer);
    if (response.status === 200) {
      login(response.data.account);
    }
  };

  return (
    <div className="userColumn">
      {!connectedUser && (
        <>
          <h3>Signin</h3>
          <form onSubmit={(e) => handlerSubmit(e)}>
            <Input
              title="email"
              color="black"
              type="text"
              onChange={(e) => setLoguer({ ...loguer, email: e.target.value })}
            />
            <Input
              title="password"
              color="black"
              type="password"
              onChange={(e) =>
                setLoguer({ ...loguer, password: e.target.value })
              }
            />

            <Button variant="contained" className="btn-newBookForm">
              submit
            </Button>
          </form>
        </>
      )}
      {connectedUser && (
        <>
          <div className="icons-container">
            <Fab color="primary" size="small">
              <PersonIcon />
            </Fab>
            <Fab color="primary" size="small">
              <LogoutIcon />
            </Fab>
            <Fab color="primary" size="small">
              <SettingsIcon />
            </Fab>
          </div>
          <img src={connectedUser.picture} alt="" className="imgProfile" />
          {/* <h3>User:</h3> */}
          <p>
            <span>Username: </span>
            {connectedUser.name} {connectedUser.surname}
          </p>
        </>
      )}
    </div>
  );
};
