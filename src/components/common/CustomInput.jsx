export const CustomInput = ({ name, placeholder, icon, type, change }) => {
  return (
    <div className="custom-input-container">
      <div className="custom-input-icon">{icon}</div>
      <input
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={change}
        className="custom-input"
      />
    </div>
  );
};
