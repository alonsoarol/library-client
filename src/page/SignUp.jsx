import { PageBanner } from "../components/PageBanner";
import LoginIcon from "@mui/icons-material/Login";
import { CustomInput } from "../components/common/CustomInput"
import { BsPerson } from "react-icons/bs";
import { FiLock, FiMail } from "react-icons/fi";
import { CustomButton } from "../components/common/CustomButton";
import { CustomSelect } from "../components/common/CustomSelect";

export const SignUp = () => {
    return (
        <>
        <PageBanner title="Sign in" icon={<LoginIcon />} />
        <div className="signUp-card-container">
            <div className="signUp-card">
                <div className="signUp-card-header">
                    <h1>Sign Up</h1>
                </div>
                <form className="signUp-card-form" >
                    <div className="signUp-form-item">
                        <CustomInput
                            placeholder="Name"
                            icon={<BsPerson />}
                            name="name"
                            type="text"

                        />
                    </div>
                    <div className="signUp-form-item">
                        <CustomInput
                            placeholder="Surname"
                            icon={<BsPerson />}
                            name="surname"
                            type="text"
                        />
                    </div>
                    <div className="signUp-form-item">
                        <CustomInput 
                            placeholder="Email"
                            icon={<FiMail />}
                            name="email"
                            type="text"
                        />
                    </div>
                    <div className="signUp-form-item">
                        <CustomInput 
                            placeholder="Password"
                            icon={<FiLock />}
                            name="password"
                            type="password"
                        />
                    </div>
                    <div className="signUp-form-item">
                        <CustomInput 
                            placeholder="Confirm Password"
                            icon={<FiLock />}
                            name="password"
                            type="password"
                        />
                    </div>
                    <div className="signUp-form-item">
                        <h4>select your gender</h4>
                    </div>
                        <CustomButton title="Sign Up"/>
                </form>
            </div>
        </div>
        </>
    );
};