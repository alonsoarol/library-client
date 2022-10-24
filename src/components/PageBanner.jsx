export const PageBanner = ({ title, icon }) => {
  return (
    <div className="pageBanner">
      {icon}
      <div className="division-pagebanner"></div>
      <h2>{title}</h2>
    </div>
  );
};
