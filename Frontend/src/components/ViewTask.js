import React, { useRef } from "react";
import Button from "./Button";
import { useDrag } from "../contexts/dragContext";
import useAuthedAxios from "../hooks/useAuthedAxios";

export const ViewTask = ({ close, data }) => {
  return (
    <div
      style={{
        padding: 5,
        borderRadius: 8,
        width: 350,
        height: "80dvh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ fontSize: 20, fontWeight: 700 }}>Task Details</div>
      <div style={{ fontSize: 18, fontWeight: 600, marginTop: 20 }}>
        Title : {data?.title}
      </div>
      {/* <div style={{ fontSize: 14, marginTop: 8 }}>{data?.title}</div> */}

      <div
        style={{ fontSize: 14, marginTop: 18, fontWeight: 600, color: "#000a" }}
      >
        Description: {data?.description}
      </div>

      <div
        style={{ fontSize: 14, marginTop: 18, fontWeight: 600, color: "#0008" }}
      >
        Created at: {new Date(data?.createdAt).toUTCString()}
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "auto",
          alignItems: "flex-end",
          justifyContent: "flex-end",
          gap: 6,
        }}
      >
        <Button
          title={"Close"}
          onClick={close}
          borderRadius={6}
          backgroundColor="#3057DF"
          color="white"
        />
      </div>
    </div>
  );
};
