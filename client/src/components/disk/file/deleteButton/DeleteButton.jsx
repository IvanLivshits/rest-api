import React from 'react';
import { useSelector } from 'react-redux';
import { fileDelete, getFiles } from '../../../../actions/file';
import './deleteButton.css';

const DeleteButton = (props) => {
    const userId = useSelector(state => state.user.currentUser.id);

    const deleteFile = (e) => {
        e.preventDefault();
        fileDelete(props.id)
            .then(() => {
                getFiles(userId)
                    .then(res => {
                        props.setFiles(res.data.fileList)
                    })
            });
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