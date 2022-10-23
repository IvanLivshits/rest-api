import React from 'react'
import DownloadButton from './downloadButton/DownloadButton';
import icon from '../../../assets/img/file.png';
import './file.css';

const File = (props) => {
    return (
        <div className='file'>
            <div className="container">
                <img src={icon} alt="" className='file__logo'/>
                <div className="file__header">
                    <div className="file__name">
                        File name!
                    </div>
                </div>
                <div className="file__download">
                    <DownloadButton />
                </div>
                <div className="file__delete">
                    <DownloadButton />
                </div>
            </div>
        </div>
    );
};

export default File;