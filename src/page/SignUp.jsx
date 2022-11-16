import { PageBanner } from "../components/PageBanner";
import LoginIcon from "@mui/icons-material/Login";
import { CustomButton } from "../components/common/CustomButton";
import { CustomInput } from "../components/common/CustomInput";
import { CustomSelect } from "../components/common/CustomSelect";
import { FiLock, FiMail } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { useRef } from "react";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import { postSignUp } from "../api/accounts.queries";

export const SignUp = () => {
  const {
    mutate,
    isLoading: isMutating,
    reset,
  } = useMutation(postSignUp, {
    onSuccess: () => {
      enqueueSnackbar("account created succesfully", {
        variant: "success",
      });
      navigate("/");
    },
    onError: (error) => {
      enqueueSnackbar(error.response.data, { variant: "error" });
      reset();
      passwordRef.current.focus();
    },
  });

  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const nameRef = useRef();
  const surnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmpasswordRef = useRef();
  const genderRef = useRef();

  const handlerSubmit = (e) => {
    e.preventDefault();
    if (confirmpasswordRef.current.value !== passwordRef.current.value) {
      enqueueSnackbar("password fields must have the same value", {
        variant: "error",
      });
      return passwordRef.current.focus();
    }
    const obj = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      gender: genderRef.current.value,
    };
    mutate(obj);
  };

  return (
    <>
      <PageBanner title="Sign Up" icon={<LoginIcon />} />
      <div className="signUp-card-container">
        <div className="signUp-card">
          <div className="signUp-card-header">
            <h1>Sign Up</h1>
          </div>
          <form className="signUp-card-form" onSubmit={(e) => handlerSubmit(e)}>
            <div className="signUp-form-item">
              <CustomInput
                placeholder="name"
                icon={<BsPerson />}
                name="name"
                type="text"
                size="mm"
                Ref={nameRef}
              />
            </div>
            <div className="signUp-form-item">
              <CustomInput
                placeholder="surname"
                icon={<BsPerson />}
                name="surname"
                type="text"
                size="mm"
                Ref={surnameRef}
              />
            </div>
            <div className="signUp-form-item">
              <CustomInput
                placeholder="email"
                icon={<FiMail />}
                name="email"
                type="text"
                size="mm"
                Ref={emailRef}
              />
            </div>
            <div className="signUp-form-item">
              <CustomInput
                placeholder="password"
                icon={<FiLock />}
                name="password"
                type="password"
                size="mm"
                Ref={passwordRef}
              />
            </div>
            <div className="signUp-form-item">
              <CustomInput
                placeholder="Confirm Password"
                icon={<FiLock />}
                name="password"
                type="password"
                size="mm"
                Ref={confirmpasswordRef}
              />
            </div>
            <h4>Select your gender</h4>
            <CustomSelect
              name="basic"
              icon={<BsPerson />}
              options={[
                { title: "male", value: "male" },
                { title: "female", value: "female" },
              ]}
              defVal="male"
              size="m"
              width={15}
              Ref={genderRef}
            />
            <CustomButton
              title={isMutating ? "Sending.." : "Sign Up"}
              width="15vw"
              height="6vh"
            />
          </form>
        </div>
      </div>
    </>
  );
};
