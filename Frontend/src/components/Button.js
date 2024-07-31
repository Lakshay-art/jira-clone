import React from "react";

const Button = ({
  onClick,
  backgroundColor = "gold",
  color = "black",
  title,
}) => {
  return (
    <button
      onClick={() => onClick?.()}
      style={{
        color,
        backgroundColor,
        border: "none",
        outline: "none",
        borderRadius: 10,
        minWidth: 50,
        minHeight: 20,
        padding: 10,
        fontWeight: 700,
      }}
      //   title={title}
    >
      {title}
    </button>
  );
};
export default Button;
