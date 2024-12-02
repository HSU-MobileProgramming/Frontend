import axios from 'axios';
import { BASE_URL } from '../../../shared/config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getTravels = async () => {
    console.log("getTravels 호출");

    try {
        const token = await AsyncStorage.getItem('accessToken');

        const response = await axios.get(
            `${BASE_URL}/trip/all_travels`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        //console.log("맵 색상 조회 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("setMapColor 호출 에러:", error.response?.data || error.message);
    }
};