import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../../shared/config/config";

// const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoidGVzdEBuYXZlci5jb20iLCJpYXQiOjE3MzMyMDgwNjEsImV4cCI6MTczMzI5NDQ2MX0.sbqGlKp_oDqJMC4nWHtqzkWiKNtMGaWHRWBdOx0QacY";

/* 여행기 전체 조회 */
export const getAllTravelLog = async () => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    console.log(token);

    if (token) {
      const response = await axios.get(`${BASE_URL}/trip/travels`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      return response;
    } else {
      console.log("토큰이 없습니다.");
      return "토큰이 없습니다.";
    }
  } catch (error) {
    console.error('getAllTravelLog error!', error.response?.data || error.message);
    return "error";
  }
};

/* 현재 진행중인 여행기 조회 */
export const getCurrentTravelLog = async () => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
    
    if (token) {
      const response = await axios.get(`${BASE_URL}/trip/current_travel`, {
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
    console.error('error!', error.response?.data || error.message);
    return "error";
  }
};
