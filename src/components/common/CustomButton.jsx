/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const CustomButton = ({ title, onClick, width, height }) => {
  return (
    <div>
      <button
        onClick={onClick}
        css={css`
          cursor: pointer;
          background: black;
          color: white;
          padding: 1rem;
          border-radius: 100px;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: background 0.5s;
          width: ${width};
          height: ${height};
          text-align: center;
          line-height: 0px;
          &:hover {
            background-color: rgba(0, 0, 0, 0.85);
          }
        `}
      >
        {title}
      </button>
    </div>
  );
};
