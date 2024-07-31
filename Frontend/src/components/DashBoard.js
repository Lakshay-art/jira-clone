import React, { useEffect, useRef, useState } from "react";
import Colunm from "./Column";
import { DragProvider, useDrag } from "../contexts/dragContext";

export default function Showposts(props) {
  const { data } = useDrag();
  return (
    <div className="Loginandregister mt-3">
      {/* <div className="textareaflex">
        <div style={{ border: "1px black solid", backgroundColor: "grey" }}>
          <img
            style={{ border: "white solid 3px" }}
            src="background.png"
            alt=""
            width="40px"
            height="auto"
          />
        </div>
        <textarea
          style={{
            padding: "5px",
            width: "90%",
            minWidth: "200px",
            marginRight: "15%",
          }}
          placeholder="What's on your mind"
          rows="2"
          //   ref={postt}
        ></textarea>
      </div> */}

      <div
        style={{
          display: "flex",
          gap: 15,
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Colunm data={data?.[0]} columnId={0} title={"TODO"}></Colunm>
        <Colunm data={data?.[1]} columnId={1} title={"IN PROGRESS"}></Colunm>
        <Colunm data={data?.[2]} columnId={2} title={"DONE"}></Colunm>
      </div>
    </div>
  );
}
