// DraggableItem.js
import React from "react";

const DraggableItem = ({ id, children, parentColumn }) => {
  const handleDragStart = (event) => {
    console.log(parentColumn);
    const data = JSON.stringify({ id, parentColumn });
    event.dataTransfer.setData("application/json", data);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      style={{
        margin: "8px",
        padding: "16px",
        border: "1px solid #ccc",
        cursor: "move",
      }}
    >
      {children}
    </div>
  );
};

export default DraggableItem;
