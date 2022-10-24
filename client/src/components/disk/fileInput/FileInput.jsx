import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { upload, getFiles } from '../../../actions/file';
import './fileInput.css'

const FileInput = ({setFiles}) => {
    const userId = useSelector(state => state.user.currentUser.id);

    const uploadContent = (event) => {
        const file = event.target.files[0];
        upload(file, userId)
            .then(() => {
                getFiles(userId)
                    .then(res => {
                        setFiles(res.data.fileList)
                    })
            });
    };

    return (
        <div className='fileInput'>
            <input
                type="file"
                onChange={(event) => uploadContent(event)}
            />            
        </div>
    );
};

export default FileInput;