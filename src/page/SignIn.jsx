import { PageBanner } from "../components/PageBanner";
import { FiLogIn } from "react-icons/fi";
import axios from "axios";
import { useLoginStore } from "../context/loginStore";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { CustomButton } from "../components/common/CustomButton";
import { CustomInput } from "../components/common/CustomInput";
import { useState } from "react";

export const SignIn = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };
  const signinGet = (token) => {
    return axios.get("http://localhost:4000/signin", {
      headers: { Authorization: "Bearer " + token },
    });
  };
  const signinPost = (data) => {
    return axios.post("http://localhost:4000/signin", data);
  };

  return (
    <>
      <PageBanner title="Sign in" icon={<LoginIcon />} />
      <div className="singIn-card-container">
        <div className="singIn-card">
          <div className="singIn-card-logo">
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="singIn-card-header">
            <h1>Sign In</h1>
          </div>
          <form className="singIn-card-form" onSubmit={(e) => handlerSubmit(e)}>
            <div className="singIn-form-item">
              <CustomInput
                placeholder="Enter Email"
                icon={<FiMail />}
                name="email"
                type="text"
                change={({ target }) =>
                  setUserData({ ...userData, email: target.value })
                }
              />
            </div>
            <div className="singIn-form-item">
              <CustomInput
                placeholder="Enter Password"
                icon={<FiLock />}
                name="password"
                type="password"
                change={({ target }) =>
                  setUserData({ ...userData, password: target.value })
                }
              />
            </div>
            <CustomButton title="Sign In" />
            <div className="singIn-card-footer">
              Don't have an account? <Link to="/signup">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
