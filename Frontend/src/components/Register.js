import React, { useEffect, useRef } from "react";

import { Link, Redirect, Switch, useNavigation } from "react-router-dom";
import axios from "axios";
import Button from "./Button";

export default function Register(props) {
  //   const history = useHistory();
  //   const goLogin = () => history.push("login");

  //   useEffect(() => {
  //     props.tellstate("register");
  //   }, []);
  const lname = useRef();
  const fname = useRef();
  const email = useRef();
  const password = useRef();
  const apassword = useRef();
  const submitt = (e) => {
    e.preventDefault();
    axios
      .post("https://jira-clone-c84z.vercel.app/api/users/register", {
        fname: fname.current.value,
        lname: lname.current.value,
        email: email.current.value,
        password: password.current.value,
      })
      .then(
        (res) => {
          console.log(res);
          if (res) {
            localStorage.setItem("id2", "");
            // goLogin();
          }
        },
        (err) => {
          console.log(err);
        }
      );
  };

  const signup = () => {};

  return (
    <div style={{ width: 350, margin: "auto" }}>
      <h2 style={{ color: "#4575ED", marginBottom: 10 }}>SignUp</h2>
      <div
        style={{ border: "2px solid #4575ED", borderRadius: 8, padding: 12 }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 15,
            marginTop: 10,
          }}
        >
          <input
            type="text"
            placeholder="First Name"
            ref={fname}
            style={{ padding: 5 }}
          />
          <input
            type="text"
            placeholder="Last Name"
            ref={lname}
            style={{ padding: 5 }}
          />
          <input
            type="email"
            placeholder="Email"
            ref={email}
            style={{ padding: 5 }}
          />
          <input
            type="password"
            placeholder="Password"
            ref={password}
            style={{ padding: 5 }}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            ref={apassword}
            style={{ padding: 5 }}
          />

          <Button
            onClick={submitt}
            backgroundColor="#4575ED"
            color="white"
            title={"SignUp"}
            borderRadius={2}
          />
        </div>
        <p style={{ fontSize: 12, fontWeight: 600, textAlign: "center" }}>
          Already have an account?
          <Link to="/login" style={{ textDecoration: "none" }}>
            {" "}
            <span className="linkgreen">Login</span>
          </Link>
        </p>

        <div style={{ textAlign: "center", width: "100%" }}>
          <Button
            onClick={signup}
            backgroundColor="#4575ED"
            color="white"
            title={"Signup with Google"}
            borderRadius={6}
          />
        </div>
      </div>
    </div>
  );
}
