import { PageBanner } from "../components/PageBanner";
import { RiCustomerService2Line } from "react-icons/ri";
import { useLoginStore } from "../context/loginStore";
import { Fab, Stack, Typography } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import { GoBack } from "../components/common/GoBack";

import { useState } from "react";

export const Home = () => {
  const UserData = useLoginStore((state) => state.connectedUser);

  return (
    <>
      <PageBanner title="Home" icon={<HomeOutlinedIcon />} />
      <Stack
        gridArea="appbody"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: "linear-gradient(to right, #33373E, #F1F3F7)",
        }}
      >
        <Typography variant="h1"  fontWeight={700} > Welcome {UserData.name} </Typography>
        <Typography variant="h1"  fontWeight={700} > to </Typography>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <img src="/Logo.png" className="logo-home" width={600} />
          </Stack> 
        </Stack>
    </>
  );
};
