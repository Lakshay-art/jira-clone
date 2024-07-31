import React from "react";

const Button = ({
  onClick,
  backgroundColor = "gold",
  color = "black",
  title,
  borderRadius = 10,
}) => {
  return (
    <button
      onClick={(e) => onClick?.(e)}
      style={{
        color,
        backgroundColor,
        border: "none",
        outline: "none",
        borderRadius: borderRadius,
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
