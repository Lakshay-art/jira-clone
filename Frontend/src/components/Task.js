import React, { useEffect, useRef, useState } from "react";
import DraggableItem from "../lib/DraggableItem";

export const Task = ({ data, id, parentColumn }) => {
  return (
    <DraggableItem id={id} parentColumn={parentColumn}>
      <div style={{ border: "1px solid red" }}>ghvjvhjvjkhvbj</div>
    </DraggableItem>
  );
};
