import { PageBanner } from "../components/PageBanner";
import { BsTruck } from "react-icons/bs";
import { FaIndustry } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi"
import { GoLocation } from "react-icons/go"
import { CustomInput } from "../components/common/CustomInput";
import { CustomButton } from "../components/common/CustomButton";
import { ProviderTable } from "../components/inventory/ProviderTable";
import { InventoryTable } from "../components/inventory/InventoryTable";
import { Table } from "@mui/material";


export const Providers = () => {
  return (
    <>
      <PageBanner title="Providers" icon={<BsTruck />} />

      <div className="Addprovider-card-container">
        <div className="Addprovider-card">
          <div className="Addprovider-card-header">
            <h1>Add Provider</h1>
          </div>
          <form className="Addprovider-card-form">
            <div className="Addprovider-form-item">
              <CustomInput 
                placeholder="Name"
                icon={<FaIndustry />}
                name="name"
                type="text"
              />
            </div>
            <div className="Addprovider-form-item">
              <CustomInput 
                placeholder="Email"
                icon={<FiMail />}
                name="email"
                type="text"
              />
            </div>
            <div className="Addprovider-form-item">
              <CustomInput 
                placeholder="Phone"
                icon={<FiPhone />}
                name="phone"
                type="text"
              />
            </div>
            <div className="Addprovider-form-item">
              <CustomInput 
                placeholder="Location"
                icon={<GoLocation />}
                name="location"
                type="text"
              />
            </div>
            <CustomButton title="Add" />
          </form>

          
        </div>
        <div className="providers-card-container">
        <div className="providers-card">
          <div className="providers-card-header">
            <h1>Providers</h1>
          </div>
          <table className="Table">
            <thead className="Table-header">
              <tr>
                <th>Name</th> <th>Email</th> <th>Phone</th> <th>Location</th>
              </tr>
            </thead>
            <tr>
              <td>rayuela</td> <td>rayu@gmail.com</td> <td>44243319</td> <td>La Rioja</td>
            </tr>
            <tr>
              <td>rayuela</td> <td>rayu@gmail.com</td> <td>44243319</td> <td>La Rioja</td>
            </tr>
          </table>
          
              
        </div>
      </div>
      </div>
    </>
  );
};
