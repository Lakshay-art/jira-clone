import React, { useEffect, useRef, useState } from "react";
import DraggableItem from "../lib/DraggableItem";
import Button from "./Button";
import useAuthedAxios from "../hooks/useAuthedAxios";
import { EditTask } from "./EditTask";
import { ViewTask } from "./ViewTask";
import { useDrag } from "../contexts/dragContext";

export const Task = ({ data, id, parentColumn }) => {
  const axios = useAuthedAxios();
  const { setData } = useDrag();
  const [modal, openModal] = useState();
  const deletePost = async () => {
    (await axios)
      .post(`${process.env.REACT_APP_SERVER}/posts/deleteTask`, {
        _id: data?._id,
      })
      .then((res) => {
        setData((prevState) => {
          const prev = prevState.map((col) => [...col]);
          prev?.[parentColumn]?.splice(id, 1);
          return prev;
        });
      });
  };
  return (
    <>
      {!!modal && <dialog open>{modal}</dialog>}
      <DraggableItem id={id} parentColumn={parentColumn}>
        <div style={{ background: "#D9E6FC", padding: 10, borderRadius: 8 }}>
          <div style={{ fontSize: 18, fontWeight: 700 }}>{data?.title}</div>
          <div style={{ fontSize: 14, marginTop: 8 }}>{data?.description}</div>
          <div style={{ fontSize: 14, marginTop: 35 }}>
            Created at: {new Date(data?.createdAt).toUTCString()}
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
              backgroundColor="#6698F2"
              title={"Edit"}
              color="white"
              onClick={() => {
                openModal(
                  <EditTask
                    close={() => openModal(undefined)}
                    id={id}
                    parentColumn={parentColumn}
                    data={data}
                  />
                );
              }}
            />
            <Button
              onClick={() =>
                openModal(
                  <ViewTask close={() => openModal(undefined)} data={data} />
                )
              }
              backgroundColor="#4575ED"
              title={"View Details"}
              color="white"
            />
          </div>
        </div>
      </DraggableItem>
    </>
  );
};
