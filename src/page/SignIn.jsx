import { PageBanner } from "../components/PageBanner";
import { FiLogIn } from "react-icons/fi";
import { useLoginStore } from "../context/loginStore";
import { FiMail } from "react-icons/fi";
import { FiLock } from "react-icons/fi";
import { Link } from "react-router-dom";
import LoginIcon from "@mui/icons-material/Login";
import { CustomButton } from "../components/common/CustomButton";
import { CustomInput } from "../components/common/CustomInput";
import { useState } from "react";
import { useMutation } from "react-query";
import { postSignIn } from "../api/accounts.queries";
import { useEffect } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();
  const login = useLoginStore((state) => state.login);

  const {
    mutate,
    isLoading: isMutating,
    reset,
  } = useMutation(postSignIn, {
    onSuccess: (data) => {
      // console.log(data.account);
      login(data.account);
      navigate("/home");
    },
    onError: (error) => {
      reset();
    },
  });

  const emailRef = useRef("");
  const passwordRef = useRef("");

  const handlerSubmit = (e) => {
    e.preventDefault();
    const obj = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };
    mutate(obj);
  };

  const [open, setOpen] = useState(false);
  useEffect(() => {
    isMutating ? setOpen(true) : setOpen(false);
  }, [isMutating]);
  return (
    <>
      <PageBanner title="Sign in" icon={<LoginIcon />} />
      <div className="singIn-card-container">
        <div className="singIn-card">
          <div className="singIn-card-logo">
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
              // onClick={handleClose}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <img src="/logo.png" alt="logo" />
          </div>
          <div className="singIn-card-header">
            <h1>Sign In</h1>
          </div>
          <form className="singIn-card-form" onSubmit={(e) => handlerSubmit(e)}>
            <div className="singIn-form-item">
              <CustomInput
                size="lm"
                placeholder="Enter Email"
                icon={<FiMail />}
                name="email"
                type="text"
                Ref={emailRef}
              />
            </div>
            <div className="singIn-form-item">
              <CustomInput
                size="lm"
                placeholder="Enter Password"
                icon={<FiLock />}
                name="password"
                type="password"
                Ref={passwordRef}
              />
            </div>
            <CustomButton
              title={isMutating ? "Sending.." : "Sign In"}
              width="20vw"
              height="7vh"
            />
            <div className="singIn-card-footer">
              Don't have an account? <Link to="/signup">Signup</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
