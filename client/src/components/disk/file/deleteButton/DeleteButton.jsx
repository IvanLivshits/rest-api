import React from 'react';
import { fileDelete } from '../../../../actions/file';
import './deleteButton.css';

const DeleteButton = (props) => {

    const deleteFile = (e) => {
        e.preventDefault();
        fileDelete(props.id);
    }

    return (
        <div className='deleteButton'>
            <button
                className='delete__btn'
                onClick={(e) => deleteFile(e)}
            >Delete
            </button>
        </div>
    );
};

export default DeleteButton;