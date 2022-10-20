import React from 'react';
import styles from './FileCard.module.css'

const FileCard = ({props}) => {
    return (
        <div className={styles.FileCard}>
            <form>
            <label>Файл № {props.id}</label>
            <label>User № {props.user_id}</label>
            <label>User's pass: {props.user_password}</label>
        </form>
        </div>
    );    
};

export default FileCard;