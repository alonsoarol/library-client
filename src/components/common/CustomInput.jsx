/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { inputSize, iconSize } from "../../utils/customInputStyle";

export const CustomInput = ({
  name,
  placeholder,
  icon,
  type,
  change,
  size,
  Ref,
  val,
}) => {
  return (
    <div>
      <div css={iconSize(size)}>{icon}</div>
      <input
        defaultValue={val}
        value={val}
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={change}
        css={inputSize(size)}
        ref={Ref}
      />
    </div>
  );
};
