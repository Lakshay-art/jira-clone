import React, { useRef } from "react";
import Button from "./Button";
import { useDrag } from "../contexts/dragContext";
import useAuthedAxios from "../hooks/useAuthedAxios";

export const EditTask = ({ close, id, parentColumn, data }) => {
  const title = useRef();
  const description = useRef();
  const { setData } = useDrag();

  const axios = useAuthedAxios();

  const edit = async () => {
    (await axios)
      .post(`${process.env.REACT_APP_SERVER}/posts/updateTask`, {
        title: title.current.value,
        description: description.current.value,
        _id: data?._id,
      })
      .then((res) => {
        console.log(res.data);
        setData((prevState) => {
          const prev = prevState.map((col) => [...col]);
          prev[parentColumn][id] = res.data;
          return prev;
        });
        close();
      });
  };

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
      <div style={{ fontSize: 18, fontWeight: 700 }}>Edit Task</div>

      <div style={{ fontSize: 14, marginTop: 28 }}>Title</div>
      <input
        type="text"
        ref={title}
        defaultValue={data?.title}
        style={{
          padding: 5,
          width: "95%",
          marginTop: 5,
          outline: "none",
          border: "none",
          borderBottom: "1px solid black",
        }}
      />

      <div style={{ fontSize: 14, marginTop: 28 }}>Description</div>
      <input
        type="text"
        ref={description}
        defaultValue={data?.description}
        style={{
          padding: 5,
          width: "95%",
          marginTop: 5,
          border: "none",
          outline: "none",
          borderBottom: "1px solid black",
        }}
      />
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
          title={"Edit"}
          borderRadius={6}
          backgroundColor="#F1F2F4"
          onClick={edit}
        />
        <Button
          title={"Cancel"}
          onClick={close}
          borderRadius={6}
          backgroundColor="#CCCFD5"
        />
      </div>
    </div>
  );
};
