import React, { useState } from 'react';
import FileInput from './fileInput/FileInput';
import './disk.css';
import FileList from './fileList/FileList';

const Disk = () => {
    return (
        <div>
            <FileInput />
            <div className="header">There is your file storage</div>
            <FileList />
        </div>
    );
};

export default Disk;