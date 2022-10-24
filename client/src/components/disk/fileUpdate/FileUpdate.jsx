import React from 'react';
import { useSelector } from 'react-redux';
import { getFiles, update } from '../../../actions/file';
import './fileUpdate.css'

const FileUpdate = (props) => {
    const userId = useSelector(state => state.user.currentUser.id);

    const uploadContent = (event) => {
        const file = event.target.files[0];
        update(file, props.id)
            .then(() => {
                getFiles(userId)
                    .then(res => {
                        props.setFiles(res.data.fileList)
                    })
            });
    };

    return (
        <div className='fileUpdate'>
            <input
                type="file"
                onChange={(event) => uploadContent(event)}
            />            
        </div>
    );
};

export default FileUpdate;