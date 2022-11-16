import { PageBanner } from "../components/PageBanner";
import { RiCustomerService2Line } from "react-icons/ri";
import { useLoginStore } from "../context/loginStore";
import { GoBack } from "../components/common/GoBack";

import { useState } from "react";

export const Home = () => {
  const UserData = useLoginStore((state) => state.connectedUser);

  return (
    <>
      <PageBanner title="Home" icon={<RiCustomerService2Line />} />

      <div className="appBody">
        <GoBack />
        {UserData && (
          <h3 style={{ textAlign: "center" }}>
            Welcome Back {UserData.name} to LibraryJS.
          </h3>
        )}
      </div>
    </>
  );
};
