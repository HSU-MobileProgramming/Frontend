import axios from 'axios';
import { BASE_URL } from '../../../shared/config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setTicket = async (travel_id,place,ticket_date,city) => {
    console.log("setTicket 호출");
    console.log(`${travel_id} ,${place} ,${ticket_date} ,${city}`)

    try {
        const token = await AsyncStorage.getItem('accessToken');

        const response = await axios.post(
            `${BASE_URL}/piece/ticket`,
            {
                travel_id,place,ticket_date,city
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        console.log("티켓 생성 성공:", response.data);
        return response.data.travel_record_id;
    } catch (error) {
        console.error("setTicket 호출 에러:", error.response?.data || error.message);
    }
};

export const getTicket = async (ticketId) => {
    console.log("getTicket 호출",ticketId);

    try {
        const token = await AsyncStorage.getItem('accessToken');

        const response = await axios.get(
            `${BASE_URL}/piece/ticket/${ticketId}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        console.log("getTicket 조회 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("getTicket 호출 에러:", error.response?.data || error.message);
    }
};

export const getTicketList = async () => {
    console.log("getTicketList 호출");

    try {
        const token = await AsyncStorage.getItem('accessToken');

        const response = await axios.get(
            `${BASE_URL}/pieces/ticket`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        //console.log("getTicketList 조회 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("getTicketList 호출 에러:", error.response?.data || error.message);
    }
};