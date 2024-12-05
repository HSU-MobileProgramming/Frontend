import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { BASE_URL } from "../../../../shared/config/config.jsx";

//const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoidGVzdEBuYXZlci5jb20iLCJpYXQiOjE3MzMyMDgwNjEsImV4cCI6MTczMzI5NDQ2MX0.sbqGlKp_oDqJMC4nWHtqzkWiKNtMGaWHRWBdOx0QacY";

/* 여행기 전체 조회 */
export const postCreateTravel = async (userId, cityId, countryId, title, startDate, endDate) => {
  try {
    const token = await AsyncStorage.getItem('accessToken');
 
    if (token) {
      const response = await axios.post(`${BASE_URL}/trip/travel_create`,
        {
          "userId": userId,
          "cityId": cityId + 1,
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

export const putTravel = async (travel_id, cityId, countryId, title, startDate, endDate) => {
  console.log(title + startDate + endDate + cityId);
  try {
    const token = await AsyncStorage.getItem('accessToken');
 
    if (token) {
      const response = await axios.put(
        `${BASE_URL}/trip/travel_update/${travel_id}`,
        {
          "title": title,
          "startDate": startDate,
          "endDate": endDate,
          "cityId": cityId + 1,
          "countryId": countryId,
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
