import React from "react";

const DropZone = ({ onDrop, children, id }) => {
  const handleDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  };

  const handleDrop = (event) => {
    const data = event.dataTransfer.getData("application/json");
    const item = JSON.parse(data);
    console.log(item);
    onDrop({ ...item, currentColumn: id });
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      style={{
        margin: "8px",
        padding: "16px",
        border: "2px dashed #ccc",
        minHeight: "100px",
      }}
    >
      {children}
    </div>
  );
};

export default DropZone;
