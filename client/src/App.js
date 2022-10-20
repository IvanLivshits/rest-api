import './App.css';
import React, {useState, useEffect } from 'react';
import FileCard from './components/FileCard/FileCard';
import FileUpload from './components/FileUpload/FileUpload';

function App() {
  const [sign, setSign] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1703/api/files_info")
      .then(res => res.json())
      .then(data => setSign(data));
  }, []);
  
  return (
    <div className="App">
      <FileUpload />
      {sign ? sign.map((el) => 
        <FileCard props={el}/>
      ) : "Is Loading..."}
    </div>
  );
}

export default App;