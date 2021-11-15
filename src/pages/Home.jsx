import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import HomeProfiles from "../components/HomeComponents/HomeProfiles";
import regresRepository from "../repositories/resregRepositories";
import RegisterModal from "../components/registerModal/RegisterModal";

const Home = () => {
    const [usersList, setUsersList] = useState([]);
    const [status, setStatus] = useState('');
    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rpassword, setrPassword] = useState("");

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
            toggleModal();
        }else if(password !== rpassword  || submitResponse.status === 400){
            return;
        }
        
    };

    const submitForm = async () => {
        const response = await regresRepository.registerRequest({
            email: email,
            password: password,
        });
        setStatus(response.status);
        return response;
    };

    const deleteUser = async (usersId) => {
        const response = await regresRepository.deleteUser({
            usersId: usersId,
        });
        setStatus(response);
        console.log("response status: " + response);
        return response;
    }

    useEffect(()=> {
        const loadData = async () =>{
            const usersData = await regresRepository.listOfUsers();
            setUsersList(usersData.data);
        };

        loadData();
    }, [])

    const toggleModal = () => setShow(!show);

    return (
        <div className="container center">
            <h1 className="homeTitle">Hello Friend <span className="wavingHand">&#128075;</span></h1>
            <div className="center">
            <button className="friendRegister" onClick={() => setShow(true)}>Register a friend</button>
            </div>
            {status === 204 &&
                <div className="responseContainer">
                    <h3>User Successfuly Deleted!</h3>
                    <button className="closeStatus" onClick={()=>{setStatus(-1)}} >&#10006;</button>
                </div>
            }
            {status === 200 &&
                <div className="responseContainer">
                    <h3>User Successfuly Created!</h3>
                    <button className="closeStatus" onClick={()=>{setStatus(-1)}} >&#10006;</button>
                </div>
            }
            <div className="profile-list">
                <HomeProfiles usersList={usersList} deleteUser={deleteUser} status={status}/>
            </div>
            
        {show && (
        <RegisterModal toggleModal={toggleModal}>
          <div className="modalCard">  
                <h2>Rgister a friend</h2>
                <hr/>
                <h3>Please complete the form to register a friend</h3>
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
                    </div>
                </form>
            </div>
        </RegisterModal>
      )}

        </div>
    )
}

export default Home
