import React, { useRef } from 'react';
import './Login.css';

const Login = () => {

    const email = useRef();
    const password = useRef();

    const handleClick = (e) => {
        e.preventDefault();
        console.log(email.current.value)
   }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Allgrow labo</h3>
                    <span className="loginDesc">
                        Connect with freinds the world around you on Allgrow labo.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick}>
                        <input
                            type="email"
                            placeholder="Email"
                            className="loginInput"
                            ref={email}
                            required
                        />
                        <input 
                            type="password"
                            placeholder="Password"
                            className="loginInput"
                            ref={password}
                            minLength="6"
                            required
                        />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton">
                            Create a New Account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
