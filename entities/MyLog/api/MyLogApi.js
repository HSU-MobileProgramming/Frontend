import axios from "axios";
import * as AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from "../../../shared/config/config";

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjUsImVtYWlsIjoidGVzdEBuYXZlci5jb20iLCJpYXQiOjE3MzMyMDgwNjEsImV4cCI6MTczMzI5NDQ2MX0.sbqGlKp_oDqJMC4nWHtqzkWiKNtMGaWHRWBdOx0QacY";

export const postRegister = (name, id, password, birth, pef) => {
  axios.post(`${BASE_URL}/user/register`,
    {
      "name": "aa",
      "email": "aa@aa.com",
      "password": "aa123",
      "phone": "010-2222-3333",
      "nickname": "aa",
      "gender": "MALE",
      "profile_img": "",
      "country": "KOREA",
      "gps_consent": 1,
      "is_public": 1

    }
    ,
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('error!', error.response?.data || error.message);
    });
};

export const getLogin = (name, id, password) => {
  axios.get(`${BASE_URL}/user/login`,
    {
      "email": "kane@example.com",
      "password": "kane123",
    },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error('error!', error.response?.data || error.message);
    });
};

/* 여행기 전체 조회 */
export const getAllTravelLog = async () => {
  try {
    // const token = await AsyncStorage.getItem('accessToken');
 
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
    // const token = await AsyncStorage.getItem('accessToken');
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
