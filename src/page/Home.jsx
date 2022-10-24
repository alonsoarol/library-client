import { PageBanner } from "../components/PageBanner";
import { VscHome } from "react-icons/vsc";

export const Home = () => {
  return (
    <>
      <PageBanner title="Home" icon={<VscHome />} />

      <div className="appBody"></div>
    </>
  );
};
