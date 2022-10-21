import React from 'react';
import Navbar from "./navbar/Navbar";
import './app.css'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Registration from "./registration/Registration";

function App() {
  return (
      <Router>
          <div className='app'>
              <Navbar/>
              <div className="wrap">
                  <Routes>
                      <Route path="/registration" element={<Registration />}/>
                  </Routes>
              </div>
          </div>
      </Router>
  );
}

export default App;