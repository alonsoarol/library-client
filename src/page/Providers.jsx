import { PageBanner } from "../components/PageBanner";
import { BsTruck } from "react-icons/bs";

export const Providers = () => {
  return (
    <>
      <PageBanner title="Providers" icon={<BsTruck />} />

      <div className="appBody"></div>
    </>
  );
};
