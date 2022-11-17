/** @jsxImportSource @emotion/react */
import { inputSize, iconSize } from "../../utils/customInputStyle";
import { css } from "@emotion/react";

export const CustomInput = ({
  placeholder,
  icon,
  type,
  size,
  Ref,
  val,
  defval,
  ...others
}) => {
  return (
    <div>
      <div css={iconSize(size)}>{icon}</div>
      <input
        defaultValue={defval}
        autoComplete="off"
        type={type}
        placeholder={placeholder}
        css={inputSize(size)}
        ref={Ref}
        value={val}
        {...others}
      />
    </div>
  );
};
