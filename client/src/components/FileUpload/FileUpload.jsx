import React, { useState, useRef } from 'react';
import styles from './FileUpload.module.css'

const hostUrl = 'http://localhost:1703/api/files_upload';

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleChange = (event) => {
        console.log(event.target.files);
        setSelectedFile(event.target.files[0]);
    }

    const handleUpload = async () => {
        if ( !selectedFile ) {
            alert('Please select a file!');
            return;
        };

        const formData = new FormData();
        formData.append('filedata', selectedFile);
        console.log(selectedFile);
        console.log(formData);

        await fetch(hostUrl, {
            method: 'POST',
            body: formData
        })
            .then((res) => res.json())
            .then((result) => {
                console.log('Success:', result);
            })
            .catch((e) => {
                console.log('Error:', e);
            })
        
    }

    return (
        <div className={styles.FileUpload}>
                <input 
                    type="file" 
                    onChange={handleChange} />
                <button onClick={handleUpload}>Upload</button>

                {selectedFile && (
                    <ul>
                        <li>Name: {selectedFile.name}</li>
                        <li>Type: {selectedFile.type}</li>
                        <li>Size: {selectedFile.size}</li>
                        <li>lastModifiedDate:{" "}
                        {selectedFile.lastModifiedDate.toLocaleDateString()}</li>
                    </ul>
                )}
		</div>
   );
};

export default FileUpload;