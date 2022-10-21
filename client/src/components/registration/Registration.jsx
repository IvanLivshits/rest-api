import React, { useState } from 'react';
import './registration.css'
import Input from "../../utils/input/Input";
import {registration} from "../../actions/user";

const Registration = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")

    return (
        <div className='registration'>
            <div className="registration__header">Registration</div>
            <Input 
                value={login} 
                setValue={setLogin} 
                type="text" 
                placeholder="Type login..."
            />
            <Input 
                value={password} 
                setValue={setPassword} 
                type="password" 
                placeholder="Type password..."
            />
            <button 
                className="registration__btn" 
                onClick={() => registration(login, password)}
            >Sign Up</button>
        </div>
    );
};

export default Registration;