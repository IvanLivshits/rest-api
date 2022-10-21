import axios from 'axios';
import { setUser } from '../reducers/userReducer';

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

export const logging = (login, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:1703/signin`, {
                login,
                password
            });
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            alert(error.response.data.message);
        }
    }
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:1703/auth`,
                {headers:{Authorization: `Bearer ${localStorage.getItem('token')}`}}
            );
            dispatch(setUser(response.data.user));
            localStorage.setItem('token', response.data.token);
        } catch (error) {
            alert(error.response.data.message);
            localStorage.removeItem('token');
        }
    }
}