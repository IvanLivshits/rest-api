import React, { useEffect } from 'react';
import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Registration from "./registration/Registration";
import Authorization from './authorization/Authorization';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../actions/user';

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  })

  return (
      <Router>
          <div className='app'>
              <Navbar/>
              <div className="wrap">
                {!isAuth &&
                  <Routes>
                    <Route path="/registration" element={<Registration />}/>
                    <Route path="/login" element={<Authorization />}/>
                  </Routes>
                }
              </div>
          </div>
      </Router>
  );
}

export default App;