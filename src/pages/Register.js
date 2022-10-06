import { useState } from "react";
import { create_user,set_user_info,login } from "../actions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import NavBar from "../componenets/NavBar";
import Footer from "../componenets/Footer";

export default function Register(props){
    const dispatch=useDispatch();
    const navigate= useNavigate();
    const [username,setUsername]=useState(null);
    const [password1,setPassword1]=useState(null);
    const [password2,setPassword2]=useState(null);
    const [error,setError]=useState(null);
    const register=(e)=>{
        e.preventDefault();
        console.log(username);
        console.log(password1)
       if(username==null||username==""){
            setError("Username is required");
       }else if(password1==null||password1==""){
        setError("Password is required");
       }else if(password1!==password2){
        setError("Passwords do not match");
       }else{
         const user={
            name:username,
            password:password1,
         }
         const userData={
            name:username
         }
         //store user info in redux store
         dispatch(create_user(user));
         dispatch(set_user_info(userData));
         dispatch(login());
         //redirect to dashboard
         navigate("/dashboard");
       }
    }
    return(
        <div className="register-container">
           <NavBar />
            <form className="register-form">
                <label>Sign up</label>
                <div>
                    <input type="text" placeholder="Username" onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div>
                    <input type="password" placeholder="Password" onChange={(e)=>setPassword1(e.target.value)}/>
                </div>
                <div>
                    <input type="password" placeholder="confirm password" onChange={(e)=>setPassword2(e.target.value)}/>
                </div>
                <button onClick={register}>Sign up</button>
            </form>
            <div>
                <p className="error">{error}</p>
            </div>

            <Footer/>
        </div>
    )
}