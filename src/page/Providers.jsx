import { PageBanner } from "../components/PageBanner";
import { BsTruck } from "react-icons/bs";
import { CustomInput } from "../components/common/CustomInput";
import { FaIndustry } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { GoLocation } from "react-icons/go"
import { CustomButton } from "../components/common/CustomButton";

export const Providers = () => {
  return (
    <>
      <PageBanner title="Providers" icon={<BsTruck />} />

      <div className="AddProvider-card-container">
        <div className="AddProvider-card">
          <div className="AddProvider-card-header">
            <h1>Add Provider</h1>
          </div>
          <form className="AddProvider-card-form">
            <div className="AddProvider-form-item">
              <CustomInput
                placeholder="name"
                icon={<FaIndustry />}
                name="name"
                type="text"
              />
            </div>
            <div className="AddProvider-form-item">
              <CustomInput
                placeholder="Email"
                icon={<FiMail />}
                name="email"
                type="text"
              />
            </div>
            <div className="AddProvider-form-item">
              <CustomInput
                placeholder="Phone"
                icon={<FiPhone />}
                name="phone"
                type="text"
              />
            </div>
            <div className="AddProvider-form-item">
              <CustomInput
                placeholder="Location"
                icon={<GoLocation />}
                name="location"
                type="text"
              />
            </div>
            <CustomButton title="Add"/>
          </form>
        </div>
      </div>
    </>
  );
};
