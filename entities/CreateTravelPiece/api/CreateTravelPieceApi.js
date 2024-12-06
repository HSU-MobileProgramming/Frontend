import axios from 'axios';
import { BASE_URL } from '../../../shared/config/config';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* 사진 생성 api */
export const postPhoto = async (travel_id, uri, description) => {
    try {
        const token = await AsyncStorage.getItem('accessToken');

        // URI를 파일로 변환
        //const fileType = uri.split(".").pop(); // 파일 확장자 추출
        const formData = new FormData();
        formData.append("travel_id", travel_id);
        formData.append("description", description || "");
        formData.append("photo", {
            uri,
            name: `photo_${Date.now()}.jpg`, // 파일 이름
            type: "image/jpeg", // 파일 MIME 타입
          });
        
        const response = await axios.post(
            `${BASE_URL}/piece/photo`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        console.log("사진 생성 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("postPhoto 호출 에러:", error.response?.data || error.message);
    }
};

/* 메모 생성 api */
export const postMemo = async (travel_id, description) => {
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


/* 메모 조각 조회 api */
export const getMemoPiece = async (travel_record_id) => {
    try {
        const token = await AsyncStorage.getItem('accessToken');
        console.log(travel_record_id);

        const response = await axios.get(
            `${BASE_URL}/piece/memo/${travel_record_id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        console.log("메모 조각 조회 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("setTicket 호출 에러:", error.response?.data || error.message);
    }
};

/* 사진 조각 조회 api */
export const getPhotoPiece = async (travel_record_id) => {
    try {
        const token = await AsyncStorage.getItem('accessToken');
        console.log(travel_record_id);

        const response = await axios.get(
            `${BASE_URL}/piece/photo/${travel_record_id}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            }
        );
        console.log("사진 조각 조회 성공:", response.data);
        return response.data;
    } catch (error) {
        console.error("getPhotoPiece 호출 에러:", error.response?.data || error.message);
    }
};