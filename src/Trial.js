import './Trial.css';
import React from 'react';
import bike from './bike.png';
import { FaFacebook } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {useState,useEffect} from "react";

function Trial() {
        const [email,setEmail] = useState("");
        const [password,setPassword] = useState("");
        const handleSubmit =()=>{
            const data ={
                email:email,
                password:password
            }
            alert(data)


        }


    return (
        <div className="Form">
            <div className='logo'>
                <h2>Judith Akinyi</h2>
                <p className='signup'>Don't have an account? <span>Sign Up</span></p>
            </div>
            <div className='start'>
                <h2>Welcome Back</h2>
            </div>

            < div className='form'>
                <form onSubmit={handleSubmit}>
                <label for='email'>Your Email:</label><br />
                <input type='text' id='email' placeholder='owuor@gmail.com' value={email} onChange={(e)=>{setEmail(e.target.value)}}></input><br />
                <label for='pin'>Password</label><br></br>
                <input type='text' id='pin' placeholder='atleast 8 characters' value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}></input><br />
                <input type='checkbox' id='log' value='In'  ></input>
                <label for='log'>keep me logged in</label><span class="psw">Forgot Password? </span><br></br>
                <button type="login">Login</button><br></br>

                __________________________or___________________________<br></br>

                <div className='icons'>
                    <FaFacebook className='facebook' />
                    <FaGoogle className='google' />
                    <FaInstagram className='instagram' />
                </div>

                <img src={bike} className="Image" alt='motorbike' />






                </form>

            </div>

        </div>


    );
}

export default Trial;


