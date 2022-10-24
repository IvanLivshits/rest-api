import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFiles } from '../../../actions/file';
import File from '../file/File';
import './fileList.css';

const FileList = () => {
    const [files, setFiles] = useState([]);
    const userId = useSelector(state => state.user.currentUser.id);

    useEffect(() => {
        getFiles(userId).then(res => {
            setFiles(res.data.fileList);
        });
    }, [userId]);
    
    return (
        <div className='fileList'>
            {files.length ? files.map(file => <File key={file.id} fileInfo={file} id={file.id} name={file.name} />) : <h1 className='loading__header'>Waiting for file delivery...</h1>}
        </div>
    );
};

export default FileList;