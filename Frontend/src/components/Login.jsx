import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
//import { Button } from 'react-bootstrap'
import { Link, useNavigation } from 'react-router-dom'
import Button from './Button';
//import jwt_decode from "jwt-decode";

export default function Login(props) {

    const [user, setuser] = useState({
        name: '',
        id: '',
        refreshToken: '',
        accessToken: '',
    });


    const email = useRef();
    const password = useRef();
    const submitt = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/login", {
            email: email.current.value,
            password: password.current.value,
        }).then((res) => {

        }, (err) => {
            console.log(err);
        })
        //setheader();
    }
    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/users/login", {
            email: email.current.value,
            password: password.current.value,
        }).then((res) => {

        }, (err) => {
            console.log(err);
        })
        //setheader();
    }
    return (
        <div style={{ width: 350, margin: "auto", }}>
            <h2 style={{ color: "#4575ED", marginBottom: 10 }}>Login</h2>
            <div style={{ border: "2px solid #4575ED", borderRadius: 8, padding: 12 }}>

                <div style={{ display: "flex", flexDirection: "column", gap: 15, marginTop: 10 }}>
                    <input type="email" placeholder="Email" ref={email} style={{ padding: 5 }} />
                    <input type="password" placeholder="Password" ref={password} style={{ padding: 5 }} />

                    <Button onClick={submitt} backgroundColor='#4575ED' color='white' title={"Login"} borderRadius={2} /></div>
                <p style={{ fontSize: 12, fontWeight: 600, textAlign: "center" }}>Don't have an account?<Link to="/register" style={{ textDecoration: "none" }}> <span className="linkgreen">SignUp</span></Link></p>

                <div style={{ textAlign: "center", width: "100%" }}><Button onClick={login} backgroundColor='#4575ED' color='white' title={"Login with Google"} borderRadius={6} /></div>
            </div>

        </div>
    )
}
