import React from 'react';
import { upload, download } from '../../actions/file';

const Disk = () => {
    const uploadContent = (event) => {
        const file = event.target.files[0];
        upload(file);
    };

    const downloadFile = (e) => {
        e.preventDefault();
        download();
    }

    return (
        <div>
            <h1>Test zone</h1>
            <input
                type="file"
                onChange={(event) => uploadContent(event)}
            />
            <button onClick={(e) => downloadFile(e)}>Download file!</button>
        </div>
    );
};

export default Disk;