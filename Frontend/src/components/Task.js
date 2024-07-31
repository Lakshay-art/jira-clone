import React, { useEffect, useRef, useState } from "react";
import DraggableItem from "../lib/DraggableItem";
import Button from "./Button";

export const Task = ({ data, id, parentColumn }) => {
  const deletePost = () => {};
  return (
    <DraggableItem id={id} parentColumn={parentColumn}>
      <div style={{ background: "#D9E6FC", padding: 10, borderRadius: 8 }}>
        <div style={{ fontSize: 18, fontWeight: 700 }}>{data?.title}</div>
        <div style={{ fontSize: 14, marginTop: 8 }}>{data?.description}</div>
        <div style={{ fontSize: 14, marginTop: 35 }}>
          Created at: {data?.createdAt}
        </div>
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 10,
            justifyContent: "flex-end",
          }}
        >
          <Button
            onClick={deletePost}
            backgroundColor="#E66E6B"
            title={"Delete"}
            color="white"
          />
          <Button
            onClick={deletePost}
            backgroundColor="#6698F2"
            title={"Edit"}
            color="white"
          />
          <Button
            onClick={deletePost}
            backgroundColor="#4575ED"
            title={"View Details"}
            color="white"
          />
        </div>
      </div>
    </DraggableItem>
  );
};
