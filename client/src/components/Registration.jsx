import React, { useState } from "react";
import axios from 'axios';
import {useNavigate } from "react-router-dom";

const RegistrationForm = () => {

    let [firstName, setFirstName] = useState("");
    let [lastName, setLastName] = useState("");
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [confirmPassword, setConfirmPassword] = useState("");

    let [formErrors, setFormErrors] = useState({})
    const navigate = useNavigate();

    const register = (e)=>{
        e.preventDefault();
        let formInfo = {firstName,lastName,email,password,confirmPassword};
        axios.post("http://localhost:8000/api/users/register", formInfo, {withCredentials:true})
            .then(res=>{
                console.log("res after registering", res)
                if(res.data.errors){
                    setFormErrors(res.data.errors)
                }
                else{
                    navigate("/")
                }
            })
            .catch(err=>{
                console.log("err after register", err)
            })
        
    }


    return (
        <div>
            <h3>Register</h3>
            <form onSubmit = {register}>
                <div className="form-group">
                    <label htmlFor="">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        id=""
                        className="form-control"
                        onChange={(e)=>setFirstName(e.target.value)}
                        
                    />
                    <p className="text-danger">{formErrors.firstName?.message}</p>
                </div>
                    <div className="form-group">
                    <label htmlFor="">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        id=""
                        className="form-control"
                        onChange={(e)=>setLastName(e.target.value)}
                    />
                    <p className="text-danger">{formErrors.lastName?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input
                        type="text"
                        name="email"
                        id=""
                        className="form-control"
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <p className="text-danger">{formErrors.email?.message}</p>
                </div>
                <div className="form-group">
                    <label htmlFor="">Password</label>
                    <input
                        type="password"
                        name="password"
                        id=""
                        className="form-control"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <p className="text-danger">{formErrors.email?.message}</p>
                </div>
                    <div className="form-group">
                    <label htmlFor="">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id=""
                        className="form-control"
                        onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                    <p className="text-danger">{formErrors.confirmPassword?.message}</p>
                </div>
                <input
                type="submit"
                value="Register"
                className="btn btn-primary mt-3"
                />
            </form>
        </div>
);
};

export default RegistrationForm;