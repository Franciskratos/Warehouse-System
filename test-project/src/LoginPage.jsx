import { useState } from "react"
import React from "react";


function LoginPage({onLogin}){

    const [userEmail, setUserEmail] = useState("");
    const [userPsw, setUserPsw] = useState("");
    const email = "francisco@test.com";
    const password = "test123";

    const Login = () => {
        if (userPsw == password && userEmail == email){
            

            onLogin();
        }
        else{
            alert("Invalid email or password")
        }
    }

    return(<>
        <div className="login-form">
            <p className="login-word">Login</p>
            <div className="email-div">
                <input type="email" placeholder="Email" value={userEmail} onChange={(e) => setUserEmail (e.target.value)}></input>
                <input type="password" placeholder="Password" value={userPsw} onChange={(e) => setUserPsw (e.target.value)}></input>
                <div className="checkbox-container">
            <input type="checkbox" id="show-password" />
            <label htmlFor="show-password" className="show-password">Show password</label>
            
        </div>
        <button onClick={Login}>Sign in</button>
        
            </div>
            <p className="no-account-text">Don't have an account yet? Sign Up</p>
            </div>    
    </>)
}
    
export default LoginPage