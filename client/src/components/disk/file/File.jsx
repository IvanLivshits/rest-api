import React from 'react'
import DownloadButton from './downloadButton/DownloadButton';
import icon from '../../../assets/img/file.png';
import './file.css';
import DeleteButton from './deleteButton/DeleteButton';
import { useState } from 'react';
import Modal from '../../../utils/modal/Modal';
import FileUpdate from '../fileUpdate/FileUpdate';

const File = (props) => {
    const [modalActive, setModalActive] = useState(false);
    const [modalPutActive, setModalPutActive] = useState(false);
    const fileInfo = props.fileInfo;

    return (
        <div className='file' >
            <div className="container">
                <img src={icon} alt="" className='file__logo'/>
                <div className="file__header">
                    <div className="file__name">
                        {props.name}
                    </div>
                </div>
                <div className="file__info">
                    <button 
                        className='file__info__btn'
                        onClick={() => setModalActive(true)}>Info</button>
                </div>
                <div className="file__download">
                    <DownloadButton id={props.id} name={props.name}/>
                </div>
                <div className="file__update">
                    <button 
                        className='file__update__btn'
                        onClick={() => setModalPutActive(true)}>Update</button>
                </div>
                <div className="file__delete">
                    <DeleteButton id={props.id} />
                </div>
                <Modal active={modalActive} setActive={setModalActive}>
                    <h2>Name: {fileInfo.name}</h2>
                    <h2>Extension: {fileInfo.extension}</h2>
                    <h2>Mimetype: {fileInfo.mimetype}</h2>
                    <h2>Owner_id: {fileInfo.owner_id}</h2>
                    <h2>File size: {fileInfo.size} bytes</h2>
                    <h2>Upload data: {fileInfo.upload_date}</h2>
                    <p>__________________________________________________________________________________________________</p>
                    <p>P.S. You can find out your identification number by clicking on the "Get ID" button in the upper right corner of the screen.</p>
                </Modal>
                <Modal active={modalPutActive} setActive={setModalPutActive} >
                    <FileUpdate id={props.id}/>
                </Modal>
            </div>
        </div>
    );
};

export default File;