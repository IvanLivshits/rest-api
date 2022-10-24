import React from 'react';
import { update } from '../../../actions/file';
import './fileUpdate.css'

const FileUpdate = (props) => {

    const uploadContent = (event) => {
        const file = event.target.files[0];
        console.log(props.id)
        update(file, props.id);
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