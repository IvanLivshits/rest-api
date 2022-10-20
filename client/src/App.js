import './App.css';
import React from 'react';
import FileUpload from './components/FileUpload/FileUpload';
import FileList from './components/FileList/FileList';

function App() {
  return (
    <div className="App">
      <FileUpload />
      <FileList />
    </div>
  );
}

export default App;