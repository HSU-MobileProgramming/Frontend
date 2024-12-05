import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../../shared/config/config";

/* 여행기 상세 조회 */
export const getDetailTravelLog = async (travel_id) => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    console.log(token);

    if (token) {
      const response = await axios.get(`${BASE_URL}/trip/travel/${travel_id}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      return response.data;
    } else {
      console.log("토큰이 없습니다.");
      return "토큰이 없습니다.";
    }
  } catch (error) {
    console.error('getAllTravelLog error!', error.response?.data || error.message);
    return "error";
  }
};

/* 여행기 종료 */
export const putEndTravel = async (travel_id) => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    console.log("token: " + token);

    if (token) {
        const response = await axios.put(
            `${BASE_URL}/trip/travel/complete/${travel_id}`, 
            {}, // 요청 본문이 없는 경우 빈 객체 전달
            {
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
              }
            }
          );

      return response.data;
    } else {
      console.log("토큰이 없습니다.");
      return "토큰이 없습니다.";
    }
  } catch (error) {
    console.error('여행기 종료 error!', error.response?.data || error.message);
    return "error";
  }
};