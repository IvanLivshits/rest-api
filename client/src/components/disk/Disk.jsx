import React, { useState } from 'react';
import FileInput from './fileInput/FileInput';
import './disk.css';
import FileList from './fileList/FileList';

const Disk = () => {
    const [files, setFiles] = useState([]);

    return (
        <div>
            <FileInput setFiles={setFiles}/>
            <div className="header">There is your file storage</div>
            <FileList files={files} setFiles={setFiles}/>
        </div>
    );
};

export default Disk;