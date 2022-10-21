import axios from 'axios';

export const registration = async (login, password) => {
    try {
        const response = await axios.post(`http://localhost:1703/signup`, {
            login,
            password
        })

        alert(response.data.message);
    } catch (error) {
        alert(error.response.data.message);
    }
}