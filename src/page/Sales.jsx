import { PageBanner } from "../components/PageBanner";
import { BsCart3 } from "react-icons/bs";

export const Sales = () => {
  return (
    <>
      <PageBanner title="Sales" icon={<BsCart3 />} />

      <div className="appBody salesPage"></div>
    </>
  );
};
