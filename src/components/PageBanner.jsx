import { useLoginStore } from "../context/loginStore";
export const PageBanner = ({ title, icon, icon2 }) => {
  const userLogued = useLoginStore((state) => state.connectedUser);
  return (
    <div className="pageBanner">
      <div className="banner-firstFrame">
        {icon}
        <div className="division-pagebanner"></div>
        <h2>{title}</h2>
      </div>
      <div className="banner-lastFrame">
        {icon2 && icon2}
        <div className="division-pagebanner"></div>
        {!userLogued ? <img src="user.png" /> : <h4>{userLogued.email}</h4>}
      </div>
    </div>
  );
};
