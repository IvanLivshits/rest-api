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
        console.log(error);
    }
}

export const update = async (file, id) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('fileId', id);
        
        const res = await axios.put('http://localhost:1703/file/update',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const upload = async (file, userId) => {
    try {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('userId', userId);
        
        const res = await axios.post('http://localhost:1703/file/upload',
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
        return res;
    } catch (error) {
        console.log(error);
    }
}

export const download = async (id, name) => {
    try {
        axios({
            url: `http://localhost:1703/file/download?fileId=${id}`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            responseType: "blob"
        }).then((res) => {
            FileDownload(res.data, `${name}`);
        });
    } catch (error) {
        console.log(error);
    }
}

export const fileDelete = async (id) => {
    try {
        const res = await axios({
            url: `http://localhost:1703/file/delete?fileId=${id}`,
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getFileInfo = async (id) => {
    try {
        const request = await axios({
            url: `http://localhost:1703/file?fileId=${id}`,
            method: 'GET',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        });
        return request;
    } catch (error) {
        console.log(error);
    }
}