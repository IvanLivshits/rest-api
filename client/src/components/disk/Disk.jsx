import React from 'react';
import FileInput from './fileInput/FileInput';
import './disk.css';
import File from './file/File';

const Disk = () => {

    return (
        <div>
            <FileInput />
            <div className="header">There are your file storage</div>
            <File />
        </div>
    );
};

export default Disk;