/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const inputSize = (size) => {
  const inputStyle = css`
    border: none;
    outline: none;
    background: rgba(255, 255, 255, 0.3);
    padding: 1vh 1.5vw 1vh 3.5vw;
    border-radius: 100px;
    transition: background 0.5s;
    width: 10vw;
    ${size === "ss" && "width: 10vw; padding-top: 1vh; padding-bottom: 1vh; "}
    ${size === "sm" && "width: 10vw; padding-top: 2vh; padding-bottom: 2vh; "}
              ${size === "sl" &&
    "width: 10vw; padding-top: 3vh; padding-bottom: 3vh; padding-left: 4.5vw;"}
              ${size === "ms" &&
    "width: 15vw; padding-top: 1vh; padding-bottom: 1vh; "}
              ${size === "mm" &&
    "width: 15vw; padding-top: 2vh; padding-bottom: 2vh; "}
              ${size === "ml" &&
    "width: 15vw; padding-top: 3vh; padding-bottom: 3vh; padding-left: 4.5vw; "}
              ${size === "ls" &&
    "width: 20vw; padding-top: 1vh; padding-bottom: 1vh; "}
              ${size === "lm" &&
    "width: 20vw; padding-top: 2vh; padding-bottom: 2vh; "}
              ${size === "ll" &&
    "width: 20vw; padding-top: 3vh; padding-bottom: 3vh; padding-left: 4.5vw;"}
              :focus {
      background: white;
    }
  `;
  return inputStyle;
};

export const iconSize = (size) => {
  const iconStyle = css`
    position: absolute;
    margin-left: 1vw;
    margin-top: 0.6vh;
    font-size: 21px;
    ${size === "ss" &&
    `margin-left: 1.3vw;
      margin-top: 0.5vh;`}
    ${size === "ms" &&
    `margin-left: 1.3vw;
      margin-top: 0.5vh;`}
      ${size === "ls" &&
    `margin-left: 1.3vw;
      margin-top: 0.5vh;`}
    ${size === "sm" &&
    `margin-left: 1vw;
      margin-top: 1.7vh;`}
      ${size === "mm" &&
    `margin-left: 1vw;
      margin-top: 1.7vh;`}
      ${size === "lm" &&
    `margin-left: 1vw;
      margin-top: 1.7vh;`}
    ${size === "sl" &&
    `margin-left: 1.7vw;
      margin-top: 2.4vh;`}
      ${size === "ml" &&
    `margin-left: 1.7vw;
      margin-top: 2.4vh;`}
      ${size === "ll" &&
    `margin-left: 1.7vw;
      margin-top: 2.4vh;`}
      & > svg {
      width: 15px;
      height: 15px;

      ${size === "ss" &&
      `width: 15px;
      height: 15px;`}
      ${size === "ms" &&
      `width: 15px;
      height: 15px;`}
      ${size === "ls" &&
      `width: 15px;
      height: 15px;`}

      ${size === "sm" &&
      `width: 20px;
      height: 20px;`}
      ${size === "mm" &&
      `width: 20px;
      height: 20px;`}
      ${size === "lm" &&
      `width: 20px;
      height: 20px;`}

      ${size === "sl" &&
      `width: 25px;
      height: 25px;`}
      ${size === "ml" &&
      `width: 25px;
      height: 25px;`}
      ${size === "ll" &&
      `width: 25px;
      height: 25px;`}
    }
  `;
  return iconStyle;
};
