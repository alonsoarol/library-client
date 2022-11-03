import { OptionUnstyled } from "@mui/base";
import { useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";

export const CustomSelect = ({ name, options, icon, change }) => {
  const [isDroped, setIsDroped] = useState(false);

  return (
    <div className="custom-select-container">
      <div className="custom-select-icon">{icon}</div>
      <select
        className="custom-select"
        name={name}
        onClick={() => setIsDroped(!isDroped)}
      >
        {options.map((opt) => (
          <option value={opt.value} key={opt.value}>
            {opt.title}
          </option>
        ))}
      </select>
      <span className="custom-select-arrow-container">
        <TiArrowUnsorted className="select-arrow" />
      </span>
    </div>
  );
};
