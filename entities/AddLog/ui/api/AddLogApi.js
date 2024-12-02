import axios from "axios";
import * as AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from "../../../../shared/config/config.jsx";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjQsImVtYWlsIjoia2FuZUBleGFtcGxlLmNvbSIsImlhdCI6MTczMzE1ODgxMywiZXhwIjoxNzMzMTYyNDEzfQ.p4bd0a0ntGUw3He-zZ9x18JSqu9Ypwn-YmqrCm0tgp8";

/* 여행기 전체 조회 */
export const postCreateTravel = async (userId, cityId, countryId, title, startDate, endDate) => {
  try {
    // const token = await AsyncStorage.getItem('accessToken');
 
    if (token) {
      const response = await axios.post(`${BASE_URL}/trip/travel_create`,
        {
          "userId": userId,
          "cityId": cityId,
          "countryId": countryId,
          "title": title,
          "startDate": startDate,
          "endDate": endDate,
          "description": title,
        },
        {
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
    console.error('postCreateTravel error!', error.response?.data || error.message);
    return "error";
  }
};

