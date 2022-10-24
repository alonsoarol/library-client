import { PageBanner } from "../components/PageBanner";
import { BsBook } from "react-icons/bs";

export const Inventory = () => {
  return (
    <>
      <PageBanner title="Inventory" icon={<BsBook />} />

      <div className="appBody inventory-page"></div>
    </>
  );
};
