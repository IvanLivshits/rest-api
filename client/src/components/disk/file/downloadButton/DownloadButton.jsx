import React from 'react';
import { download } from '../../../../actions/file';
import './downloadButton.css';

const DownloadButton = () => {

    const downloadFile = (e) => {
        e.preventDefault();
        download();
    }

    return (
        <div className='downloadButton'>
            <button
                onClick={(e) => downloadFile(e)}
            >Download file
            </button>
        </div>
    );
};

export default DownloadButton