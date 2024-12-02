import axios from 'axios';
import { BASE_URL } from '../../../shared/config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

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

export const login = async (email, password) => {
    try {
        console.log("email", email);
        console.log("password", password);

        const response = await axios.post(
            `${BASE_URL}/user/login`,
            {
                email,
                password,
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        );

        // 토큰 저장
        await AsyncStorage.setItem('accessToken', response.data.token);

        // 저장된 토큰 가져오기
        const token = await AsyncStorage.getItem('accessToken');
        console.log("로컬에 저장된 토큰", token);
    } catch (error) {
        console.error('Login error!', error.response?.data || error.message);
    }
};
