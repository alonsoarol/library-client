import { PageBanner } from "../components/PageBanner";
import { RiCustomerService2Line } from "react-icons/ri";

export const Customers = () => {
  return (
    <>
      <PageBanner title="Customers" icon={<RiCustomerService2Line />} />

      <div className="appBody"></div>
    </>
  );
};
