import axios from 'axios';
import { BASE_URL } from '../../../shared/config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setMapColor = async (color, countryId) => {
    console.log("setMapColor 호출");

    try {
        const token = await AsyncStorage.getItem('accessToken');

        const response = await axios.post(
            `${BASE_URL}/maps`,
            {    "color" : color,
                 "country_id" : countryId
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        console.log("맵 색상 설정 성공:", response.data);
    } catch (error) {
        console.error("setMapColor 호출 에러:", error.response?.data || error.message);
    }
};
