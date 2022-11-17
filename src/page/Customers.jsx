import { PageBanner } from "../components/PageBanner";
import { RiCustomerService2Line } from "react-icons/ri";
import { GoBack } from "../components/common/GoBack";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { CustomersList } from "../components/pagesComponents/customers/CustomersList";
import { Profile } from "../components/pagesComponents/customers/Profile";
import { SalesScreen } from "../components/pagesComponents/customers/SalesScreen";
import { PermissionsScreen } from "../components/pagesComponents/customers/PermissionsScreen";

export const Customers = () => {
  const [value, setValue] = useState(0);
  const [targedUser, setTargedUser] = useState({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <PageBanner title="Employees" icon={<RiCustomerService2Line />} />

      <div className="appBody">
        <GoBack />
        <Stack
          p={2}
          direction="row"
          bgcolor="black"
          color="white"
          width={1000}
          m="auto"
          spacing={3}
          justifyContent="center"
          borderRadius={5}
        >
          <CustomersList setTargedUser={setTargedUser} />
          <Stack
            bgcolor="black"
            color="white"
            width={500}
            height={400}
            flex={2}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              textColor="white"
              indicatorColor="primary"
              centered
            >
              <Tab label="Profile" />
              <Tab label="Actions" />
              <Tab label="Sales" />
            </Tabs>

            {value === 0 && Object.entries(targedUser).length !== 0 && (
              <Profile targedUser={targedUser} />
            )}
            {value === 1 && (
              <PermissionsScreen targedUser={targedUser}>
                item1
              </PermissionsScreen>
            )}
            {value === 2 && Object.entries(targedUser).length !== 0 && (
              <SalesScreen targedUser={targedUser} />
            )}
          </Stack>
        </Stack>
      </div>
    </>
  );
};
