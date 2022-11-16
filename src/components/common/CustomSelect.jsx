/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { TiArrowUnsorted } from "react-icons/ti";

export const CustomSelect = ({
  name,
  options,
  icon,
  change,
  width,
  size,
  Ref,
  defVal,
  basic,
  ...others
}) => {
  const [isDroped, setIsDroped] = useState(false);
  return (
    <div
      css={css`
        position: relative;
        font-size: 1.3rem;
      `}
    >
      <div
        css={css`
          position: absolute;
          & > svg {
            margin-left: 1.3vw;
            ${size === "s" && `width: 15px; height: 15px; margin-top: 1vh;`}
            ${size === "m" && `width: 20px; height: 20px; margin-top: 1.5vh;`}
            ${size === "l" && `width: 25px; height: 25px; margin-top: 2vh;`}
      
        `}
      >
        {icon}
      </div>
      <select
        {...others}
        defaultValue={defVal}
        ref={Ref}
        name={name}
        onClick={() => setIsDroped(!isDroped)}
        // onChange={
        //   change
        //     ? ({ target }) => {
        //         change(target.value);
        //       }
        //     : null
        // }
        css={css`
          border: none;
          outline: none;
          background: rgba(255, 255, 255, 0.3);
          padding: 1vh 1.5vw 1vh 3.5vw;
          border-radius: 100px;
          transition: background 0.5s;
          appearance: none;
          width: 10vw;
          ${size === "s" && `height: 4.5vh;`}
          ${size === "m" && `height: 6.2vh;`}
          ${size === "l" && `height: 7.9vh;`}

          width: ${width}vw;
          :focus {
            background: white;
          }
        `}
      >
        {name === "provider" &&
          options &&
          options.map((prov) => (
            <option value={prov.name} key={prov._id}>
              {prov.code} - {prov.name}
            </option>
          ))}
        {name === "books" &&
          options &&
          options.map((opt) => (
            <option value={opt._id} key={opt._id}>
              {opt.code} - {opt.title}
            </option>
          ))}
        {name === "basic" &&
          options &&
          options.map((opt, index) => (
            <option value={opt.value} key={index}>
              {opt.title}
            </option>
          ))}
      </select>
      <span
        css={css`
          background-color: black;
          width: 2.4vw;
          height: 100%;
          border-top-right-radius: 25px;
          border-bottom-right-radius: 25px;
          border-top: 5px solid black;
          border-bottom: 5px solid black;
          pointer-events: none;
          position: absolute;
          top: 0;
          left: 7.6vw;
          left: calc(${width}vw - 2.4vw);
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <TiArrowUnsorted
          css={css`
            color: white;
            pointer-events: none;
            width: 15px;
            height: 15px;
          `}
        />
      </span>
    </div>
  );
};
