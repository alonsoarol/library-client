import { PageBanner } from "../components/PageBanner";
import { FiLogIn } from "react-icons/fi";

export const SignIn = () => {
  return (
    <>
      <PageBanner title="Sign In" icon={<FiLogIn />} />

      <div className="appBody"></div>
    </>
  );
};
