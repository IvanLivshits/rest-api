import React from 'react';
import { download } from '../../../../actions/file';
import './downloadButton.css';

const DownloadButton = (props) => {

    const downloadFile = (e) => {
        e.preventDefault();
        download(props.id, props.name);
    }

    return (
        <div className='downloadButton'>
            <button
                className='download__btn'
                onClick={(e) => downloadFile(e)}
            >Download
            </button>
        </div>
    );
};

export default DownloadButton