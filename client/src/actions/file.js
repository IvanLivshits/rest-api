import axios from 'axios';
const FileDownload = require('js-file-download');


export const upload = async (file) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        
        await axios.post('http://localhost:1703/file/upload',
            formData,
            {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
        );
    } catch (error) {
        alert(error);
    }
}

export const download = async() => {
    try {
        axios({
            url: 'http://localhost:1703/file/download',
            method: 'GET',
            responseType: "blob"
        }).then((res) => {
            FileDownload(res.data, "Component 1.svg");
        });
    } catch (error) {
        alert(error)
    }
}