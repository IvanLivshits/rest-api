import axios from 'axios';

export const upload = async (file) => {
    return async dispatch => {
        try {
            const formData = new FormData();
            formData.append('file', file);
            
            const response = await axios.post('http://localhost:1703/file/upload',
                formData,
                {headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}}
            );

            dispatch(response.data);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}