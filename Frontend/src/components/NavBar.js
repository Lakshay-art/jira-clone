import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/authContext";
import Button from "./Button";

export default function Navbar(props) {
  //   const [state, setstate] = useState(localStorage.getItem("state"));
  const { isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();
  return (
    <div>
      <nav
        style={{
          display: "flex",
          background: "#4575ED",
          padding: 15,
          justifyContent: "space-between",
        }}
      >
        <Button
          title={"Github Repo"}
          backgroundColor="white"
          onClick={() =>
            window.open("https://github.com/Lakshay-art/jira-clone", "_blanc")
          }
        />

        {/* <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li> */}

        {!isAuthenticated ? (
          <Button
            title={"Login"}
            backgroundColor="#fff8"
            onClick={() => {
              navigate("/login");
            }}
          />
        ) : (
          <Button
            title={"Logout"}
            backgroundColor="#E66E6B"
            color="#fff"
            onClick={() => {
              logout();
              navigate("/login");
            }}
          />
        )}
        {/* <li className="nav-item"><Link className="nav-link text-white" to="/weather">Weather App</Link></li> */}
      </nav>
    </div>
  );
}
