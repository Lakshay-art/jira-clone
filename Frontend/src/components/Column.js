import React, { useEffect, useRef, useState } from "react";
import { Task } from "./Task";
import DropZone from "../lib/DropZone";
import { useDrag } from "../contexts/dragContext";

const Colunm = ({ data, columnId, title }) => {
  const { handleDrop } = useDrag();

  return (
    <DropZone id={columnId} onDrop={handleDrop}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          background: "white",
          border: "1px solid #E7E9EC",
          padding: 10,
          width: 350,
          minHeight: 400,
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            color: "white",
            background: "#6698F2",
            padding: "8px 12px",
            fontWeight: 700,
            borderRadius: 5,
          }}
        >
          {title}
        </div>
        {data?.map((item, index) => {
          return (
            <Task
              key={`task-${columnId}-${index}}`}
              data={item}
              id={index}
              parentColumn={columnId}
            ></Task>
          );
        })}
      </div>
    </DropZone>
    // </div>
  );
};
export default Colunm;
