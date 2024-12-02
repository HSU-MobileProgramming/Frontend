import axios from 'axios';
import { BASE_URL } from '../../../shared/config/config';

export const signUp = (formData) => {
    console.log("서버로 보낼 formData",formData)
    return axios.post(`${BASE_URL}/user/register`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
    .then((response) => {
        console.log('Sign-up success:', response.data);
        return response.data;
    })
    .catch((error) => {
        console.error('Sign-up error:', error.response?.data || error.message);
        throw error; // 에러를 호출자에게 전달
    });
};

export const login = (email,password) => {    
    axios.post(`${BASE_URL}/user/register`,
        {
            "email" : email,
            "password": password,
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
    .then((response) => {
        console.log(response.data);
    })
    .catch((error) => {
        console.error('error!', error.response?.data || error.message);
    });
};
