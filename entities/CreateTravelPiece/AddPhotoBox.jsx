import styled from "styled-components/native";
import { TouchableOpacity, View, Image, Platform } from "react-native";
import * as ImagePicker from 'expo-image-picker';

// import ADD from '../../assets/add-grey.png';
import ADD from '../../assets/add-grey.svg';
import { useEffect, useState } from "react";

export default function AddPhotoBox() {
    const [response, setResponse] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (response !== null) {
            console.log("selectedImage: " + selectedImage);
        }
    }, [response]);

    const handleTakeChoosePhoto = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ['images'], // 사진만 선택
                //allowsEditing: true, // 편집 허용
                quality: 1, // 원본 품질 유지
            });

            if (!result.canceled) {
                setResponse(result); // 전체 응답 저장
                setSelectedImage(result.assets[0].uri); // 선택된 이미지 URI 저장
            } else {
                console.log("Image selection canceled");
            }

            
        } catch (error) {
            console.error("ImagePicker Error:", error);
        }
    }

    const handleTakePhoto = async () => {
        try {
            const result = await ImagePicker.launchCameraAsync({
                saveToPhotos:true,
                mediaTypes: ['images'], // 사진만 선택
                //allowsEditing: true, // 편집 허용
                quality: 1, // 원본 품질 유지
            });

            if (!result.canceled) {
                setResponse(result); // 전체 응답 저장
                setSelectedImage(result.assets[0].uri); // 선택된 이미지 URI 저장
            } else {
                console.log("Image selection canceled");
            }

            
        } catch (error) {
            console.error("ImagePicker Error:", error);
        }
    }
    
    const _handlePhotoBtnPress = async () => {
        // image library 접근에 대한 허가 필요 없음
        // ImagePicker를 이용해 Image형식의 파일을 가져온다
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        });

        // cancelled가 아닐 때 가져온 사진의 주소로 onChangePhoto
        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
        } else {

        }
    };

    return (
        <MainLayout onPress={handleTakePhoto}>
            {selectedImage ? (
                <PhotoImage source={{ uri: selectedImage }} />
            ) : (
                <ADD /> // SVG를 컴포넌트처럼 사용
            )}
        </MainLayout>
    )
}

const MainLayout = styled.TouchableOpacity`
width: 80px;
height: 80px;
flex-direction: column;
background: #FFF;
border-radius: 10px;
justify-content: center;
align-items: center;

`;

const PhotoImage = styled.Image`
width: 80px;
height: 80px;
border-radius: 10px;
`;
