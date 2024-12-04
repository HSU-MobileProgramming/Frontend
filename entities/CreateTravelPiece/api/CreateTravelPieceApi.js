import axios from 'axios';
import { BASE_URL } from '../../../shared/config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* 사진 생성 api */
export const postPhoto = async ( travel_id, url , description ) => {
    try {
        const token = await AsyncStorage.getItem('accessToken');

        const response = await axios.post(
            `${BASE_URL}/piece/photo`,
            {
                travel_id, url, description
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        console.log("사진 생성 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("setTicket 호출 에러:", error.response?.data || error.message);
    }
};

/* 메모 생성 api */
export const postMemo = async ( travel_id, description ) => {
    try {
        const token = await AsyncStorage.getItem('accessToken');

        const response = await axios.post(
            `${BASE_URL}/piece/memo`,
            {
                travel_id, description
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        console.log("사진 생성 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("setTicket 호출 에러:", error.response?.data || error.message);
    }
};
