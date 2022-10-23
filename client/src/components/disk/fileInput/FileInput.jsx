import React from 'react';
import { upload } from '../../../actions/file';
import './fileInput.css'

const FileInput = () => {

    const uploadContent = (event) => {
        const file = event.target.files[0];
        console.log(event);
        upload(file);
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