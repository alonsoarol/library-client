import { PageBanner } from "../components/PageBanner";
import { RiCustomerService2Line } from "react-icons/ri";
import { GoBack } from "../components/common/GoBack";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import { Avatar, Typography } from "@mui/material";
import { useLoginStore } from "../context/loginStore";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { CustomersList } from "../components/pagesComponents/customers/CustomersList";
import { Profile } from "../components/pagesComponents/customers/Profile";
import { SalesScreen } from "../components/pagesComponents/customers/SalesScreen";

export const Customers = () => {
  const userLogued = useLoginStore((state) => state.connectedUser);

  const [value, setValue] = useState(0);
  const [targetUser, setTargetUser] = useState({});

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
          <CustomersList setTargetUser={setTargetUser} />
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
            >
              <Tab label="Profile" />
              <Tab label="Permissions" />
              <Tab label="Sales" />
            </Tabs>

            {value === 0 && Object.entries(targetUser).length !== 0 && (
              <Profile targetUser={targetUser} />
            )}
            {value === 1 && <h1>item1</h1>}
            {value === 2 && Object.entries(targetUser).length !== 0 && (
              <SalesScreen />
            )}
          </Stack>
        </Stack>
      </div>
    </>
  );
};
