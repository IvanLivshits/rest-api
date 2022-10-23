import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFiles } from '../../../actions/file';
import File from '../file/File';

const FileList = () => {
    const [files, setFiles] = useState([]);
    const userId = useSelector(state => state.user.currentUser.id);

    useEffect(() => {
        getFiles(userId).then(res => {
            setFiles(res.data.fileList);
        });
    }, [userId]);
    
    console.log(files);
    return (
        <div>
            {files?.length >= 1 ? files.map(file => <File key={file.id} name={file.name} />) : <h1>Loading...</h1>}
        </div>
    );
};

export default FileList;