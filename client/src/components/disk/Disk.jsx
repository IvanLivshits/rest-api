import React from 'react';
import FileInput from './fileInput/FileInput';
import './disk.css';
import File from './file/File';
import FileList from './fileList/FileList';

const Disk = () => {

    return (
        <div>
            <FileInput />
            <div className="header">There is your file storage</div>
            <FileList />
            <File />
        </div>
    );
};

export default Disk;