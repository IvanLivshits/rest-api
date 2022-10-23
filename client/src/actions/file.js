import axios from 'axios';
const FileDownload = require('js-file-download');

export const getFiles = async (userId) => {
    try {
        const request = await axios.get(`http://localhost:1703/file/list?userId=${userId}`,
            {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            return request;
    } catch (error) {
        alert(error);
    }
}

export const upload = async (file, userId) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('userId', userId);
        
        await axios.post('http://localhost:1703/file/upload',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
    } catch (error) {
        alert(error);
    }
}

export const download = async () => {
    try {
        axios({
            url: 'http://localhost:1703/file/download',
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            responseType: "blob"
        }).then((res) => {
            FileDownload(res.data, "Component 1.svg");
        });
    } catch (error) {
        alert(error)
    }
}