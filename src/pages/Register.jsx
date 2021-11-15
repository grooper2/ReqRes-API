import React, {useState} from 'react';
import "../App.css";
import regresRepository from '../repositories/resregRepositories';
import { useHistory } from "react-router-dom";

const Register = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [rpassword, setrPassword] = useState("");
   const history = useHistory();

    const onChangeEmail = async (e) => {
        setEmail(e.target.value);
    }

    const onChangePassword = async (e) => {
        setPassword(e.target.value);
    };

    const onChangeRepeatPassword = async (e) => {
        setrPassword(e.target.value);
    };

    const onSubmit = async (e) =>{
        e.preventDefault();
        const submitResponse= await submitForm();

        if(password === rpassword){
            history.push("/home");
        }else if(password !== rpassword  || submitResponse.status === 400){
            return;
        }
        
    };

    const submitForm = async () => {
        const response = await regresRepository.registerRequest({
            email: email,
            password: password,
        });

        return response;
        
    };

    return (
        <div className="container center">
            <div className="card">  
                <h2>REQRES-API</h2>
                <hr />
                <h3>Welcome to REQRES-API register here to discover more</h3>
                <div className="registerFormTitle">
                    <p>Register</p>
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
                        <label className="input">
                            <input className="input__field" type="password" placeholder=" " onChange={onChangeRepeatPassword} />
                            <span className="input__label">Repeat Password</span>
                        </label>
                        <input type="submit" className="register-btn" value="Register"/>
                        <p>Already have an account? Click <a className="clickHere"onClick={()=>{history.push("/login")}}>Here</a> to Login</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register;
