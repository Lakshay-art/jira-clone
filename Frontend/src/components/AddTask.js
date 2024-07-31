import React, { useRef } from "react";
import Button from "./Button";
import { useDrag } from "../contexts/dragContext";
import getAuthedAxios from "../lib/authedAxios";
import { useAuth } from "../contexts/authContext";

export const AddTask = ({ close }) => {
  const title = useRef();
  const description = useRef();
  const { setData } = useDrag();
  const { user } = useAuth();

  const add = async () => {
    console.log(user);
    await getAuthedAxios(user?.accessToken)
      .post("https://jira-clone-c84z.vercel.app/api/posts/setpost", {
        title: title.current.value,
        description: description.current.value,
      })
      .then((res) => {
        setData((prevState) => {
          const prev = prevState.map((col) => [...col]);
          prev?.[0]?.push(res);
        });
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
      <div style={{ fontSize: 18, fontWeight: 700 }}>Title</div>
      <input
        type="text"
        ref={title}
        style={{
          padding: 5,
          width: "95%",
          marginTop: 20,
          outline: "none",
          border: "none",
          borderBottom: "1px solid black",
        }}
      />

      <div style={{ fontSize: 14, marginTop: 28 }}>Description</div>
      <input
        type="text"
        ref={description}
        style={{
          padding: 5,
          width: "95%",
          marginTop: 20,
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
          title={"Add"}
          borderRadius={6}
          backgroundColor="#F1F2F4"
          onClick={add}
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
