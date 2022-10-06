import { useState } from "react";
import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from "react-redux";
import { login, set_user_info } from "../actions";
import { useNavigate } from "react-router-dom";

import NavBar from "../componenets/NavBar";
import Footer from "../componenets/Footer";

export default function Login(props) {
    const users = useSelector(state => state.users);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(null);
    const signIn = (e) => {
        e.preventDefault();
        if (username == null || username == "") {
            setError("Username required");
        } else if (password == null || password == "") {
            setError("Password is required");
        } else {
            let loginUser = false;
            let userInfo = null;
            users.forEach((user) => {
                if (user.name === username && user.password === password) {
                    loginUser = true;
                    userInfo = user;
                }
            })
            if (loginUser) {
                const user = {
                    name: userInfo.name,
                }
                console.log("yes");
                //dispatch login
                dispatch(set_user_info(user));
                dispatch(login());
                //redirect to dashboard
                navigate("/dashboard");
            } else {
                setError("invalid username/password");
            }
        }

    }
    return (
        <div className="login">
            <NavBar />

            <form className="login-form">
                <label>Sign in</label>
                <div>
                    <input type="text" name="username" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div>
                    <input type="password" name="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button onClick={signIn}>Sign in</button>
            </form>
            <div>
                <p className="error">{error}</p>
            </div>

            <Footer />
        </div>
    )
}