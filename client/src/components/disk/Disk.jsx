import React from 'react';
import { useDispatch } from 'react-redux';
import { upload } from '../../actions/file';

const Disk = () => {
    const dispatch = useDispatch();

    const uploadContent = (event) => {
        const file = event.target.file;
        console.log(file);
        dispatch(upload(file));
    };

    return (
        <div>
            <h1>Test zone</h1>
            <input
                type="file"
                onChange={(event) => uploadContent(event)}
            />
        </div>
    );
};

export default Disk;