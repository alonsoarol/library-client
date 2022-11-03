export const CustomButton = ({ title, onClick }) => {
  return (
    <div className="custom-button-container">
      <button className="custom-button" onClick={onClick}>
        {title}
      </button>
    </div>
  );
};
