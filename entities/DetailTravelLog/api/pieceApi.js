import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../../shared/config/config";

//티켓 조각 리스트
export const getTicketCount = async () => {
    try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
            const response = await axios.get(`${BASE_URL}/pieces/ticket`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            return response.data.tickets.length;
        } else {
            console.log("토큰이 없습니다.");
            return "토큰이 없습니다.";
        }
    } catch (error) {
        console.error('getAllTravelLog error!', error.response?.data || error.message);
        return "error";
    }
};

//메모 조각 리스트
export const getMemoCount = async () => {
    try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
            const response = await axios.get(`${BASE_URL}/pieces/memo`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            return response.data.memos.length;
        } else {
            console.log("토큰이 없습니다.");
            return "토큰이 없습니다.";
        }
    } catch (error) {
        console.error('getAllTravelLog error!', error.response?.data || error.message);
        return "error";
    }
};

//사진 조각 리스트
export const getPhotoCount = async () => {
    try {
        const token = await AsyncStorage.getItem('accessToken');
        if (token) {
            const response = await axios.get(`${BASE_URL}/pieces/photo`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            return response.data.photos.length;
        } else {
            console.log("토큰이 없습니다.");
            return "토큰이 없습니다.";
        }
    } catch (error) {
        console.error('getAllTravelLog error!', error.response?.data || error.message);
        return "error";
    }
};