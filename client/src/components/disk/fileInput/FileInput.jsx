import React from 'react';
import { useSelector } from 'react-redux';
import { upload } from '../../../actions/file';
import './fileInput.css'

const FileInput = () => {
    const userId = useSelector(state => state.user.currentUser.id);

    const uploadContent = (event) => {
        const file = event.target.files[0];
        upload(file, userId);
    };

    return (
        <div className='fileInput'>
            <input
                id="image_uploads"
                type="file"
                onChange={(event) => uploadContent(event)}
            />            
        </div>
    );
};

export default FileInput;