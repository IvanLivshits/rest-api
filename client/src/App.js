import './App.css';
import React, {useState, useEffect } from 'react';

function App() {
  const [sign, setSign] = useState(null);
  useEffect(() => {
    fetch("http://localhost:1703/testAPI")
      .then(res => res.json())
      .then(data => setSign(data.message));
  }, []);
  
  return (
    <div className="App">
      <h1>{sign}</h1> 
    </div>
  );
}

export default App;
