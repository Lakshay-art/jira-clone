import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
//import { Button } from 'react-bootstrap'
import { Link, useNavigation } from 'react-router-dom'
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
    return (
        <div>
            <div className="Loginandregister">
                <h2>Login</h2>
                <p>Login to this awesome application!</p>


                <input type="email" placeholder="Email" ref={email} />
                <input type="password" placeholder="Password" ref={password} />

                <button onClick={submitt} className="greenbtn"><span style={{ textDecoration: "none", color: "white" }}>LOGIN</span></button>
                <p>Don't have an account?<Link to="/register"><span className="linkgreen">Register</span></Link></p>

            </div>

        </div>
    )
}
