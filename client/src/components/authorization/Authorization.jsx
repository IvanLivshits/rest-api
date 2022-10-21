import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Input from '../../utils/input/Input';
import './authorization.css';
import {logging} from '../../actions/user';

const Authorization = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

   return (
       <div className='authorization'>
        <div className="authorization__header">Authorization</div>
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
            className="authorization__btn"
            onClick={() => dispatch(logging(login, password))}>Log In</button>
       </div>
   );
};

export default Authorization;