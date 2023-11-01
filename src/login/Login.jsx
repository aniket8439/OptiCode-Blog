
import React, { useState } from 'react';
import '../App.css';
import google from '../assets/logos_google-icon.png';
import apple from '../assets/ic_outline-apple.png';
import facebook  from '../assets/logos_facebook.png';
import {Link, NavLink} from 'react-router-dom';

const Login = () => {

    return (
        <div className='background'>
            <div className='container'>
                <h1 style={{ textAlign: "center", color: "white" }}>OptiCode</h1>
                <p>Blogs</p>
            </div>
            <div className="flex_container">
                <div className='mascot'>
                </div>
                <div className="login_container">
                    <h1 className='name'>LogIn</h1>
                    <div className="input_container">
                        <input type="text" placeholder='email' />
                    </div>
                    <div className="input_container">
                        <input type="password" placeholder='password' />
                    </div>
                    <div className="center_container">
                        <div className="button">
                            <NavLink to="/home">
                            <button ><h1 style={{ fontSize: "20px" }}>LogIn</h1></button>
                            </NavLink>
                            
                        </div>
                        <p>Don't have an account? <a href="">Register Here</a></p>
                        <hr />
                        <div className="methods">
                            <img src={google} alt="google" />
                            <img src={apple} alt="apple" />
                            <img src={facebook} alt="facebook" />
                        </div>

                    </div>

                </div>

            </div>


        </div>
    )
}

export default Login