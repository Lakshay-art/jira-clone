import React, { useEffect, useRef, useState } from "react";
import DraggableItem from "../lib/DraggableItem";

export const Task = ({ data, id, parentColumn }) => {
  return (
    <DraggableItem id={id} parentColumn={parentColumn}>
      <div style={{ background: "#D9E6FC", padding: 20, borderRadius: 8 }}>
        ghvjvhjvjkhvbj
      </div>
    </DraggableItem>
  );
};
