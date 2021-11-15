import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import regresRepository from '../repositories/resregRepositories';
import "../App.css";

const Login = () =>{
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const history = useHistory();

    const onChangeEmail = async (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = async (e) => {
        setPassword(e.target.value);
    };

    const onSubmit = async (e) =>{
        e.preventDefault();
        submitForm();
    };

    const submitForm = async () => {
        await regresRepository.loginRequest({
            email: email,
            password: password,
        });
        history.push("/home");
    };

    
        return (
            <div className="container center">
                <div className="card">  
                    <h2>REQRES-API</h2>
                    <hr />
                    <h3>Welcome back to REQRES-API</h3>
                    <div className="registerFormTitle">
                        <p>Login</p>
                    </div>
                    <form onSubmit={onSubmit}>
                        <div className="form-field center">
                            <label className="input">
                                <input className="input__field" type="text" placeholder=" " onChange={onChangeEmail} />
                                <span className="input__label">Email</span>
                            </label>
                        </div>
                        <div className="form-field center">
                            <label className="input">
                                <input className="input__field" type="password" placeholder=" " onChange={onChangePassword} />
                                <span className="input__label">Password</span>
                            </label>
                        </div>
                        <div className="form-field center">
                            <input type="submit" className="register-btn" value="Login"/>
                            <p>Don't have an account? Click <a className="clickHere"onClick={()=>{history.push("/")}}>Here</a> to Register</p>
                        </div>
                    </form>
                </div>
            </div>
        )
    
}

export default Login;
