import styled from "styled-components/native";
import { Image, Pressable, Alert, Platform } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { PermissionsAndroid } from "react-native";

// image
import BASICCOUNTRY from '../../../assets/basic-country.png';
import CAMERA from '../../../assets/camera.png';
import { useEffect, useState } from "react";



export default function CountryImagePicker() {
  // 권한 요청하는 Hooks
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();
  // 국가 이미지
  const [countryImageUrl, setCountryImageUrl] = useState(null);

  useEffect(() => {
    console.log(countryImageUrl);
  }, [countryImageUrl]);

  // Android 권한 요청 함수
  const requestAndroidPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: "사진 접근 권한 요청",
            message: "사진을 선택하려면 접근 권한이 필요합니다.",
            buttonNeutral: "나중에",
            buttonNegative: "취소",
            buttonPositive: "허용",
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    }
    return true; // iOS에서는 권한이 필요 없음
  };

  const uploadImage = async () => {
    // 권한 확인 코드:  권한 없으면 물어보고, 있으면 안물어보고 함수 종료
    if (!status?.granted) {
      const permission = await requestPermission();
      if (!permission.granted) {
        Alert.alert('권한 거부됨', '사진 접근 권한이 필요합니다.');
        return null;
      }
    }
    // image upload
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      aspect: [1, 1]
    });
    if (!result.canceled) {
      setCountryImageUrl(result.assets[0].uri); // 이미지 URI 설정
    }
    // Android에서 추가 권한 요청
    const androidPermissionGranted = await requestAndroidPermission();
    if (!androidPermissionGranted) {
      Alert.alert('권한 거부됨', 'Android 기기에서 사진 접근 권한이 필요합니다.');
      return;
    }
    //setCountryImageUrl(result.uri);
  }
  return (
    <Pressable onPress={uploadImage}>
      <CountryImagePickerBox>
        <CountryImage source={countryImageUrl ? { uri: countryImageUrl } : BASICCOUNTRY} />
        <CameraImage source={CAMERA} />
      </CountryImagePickerBox>
    </Pressable>
  )
}

const CountryImagePickerBox = styled.View`
position: relative;
`;

const CountryImage = styled.Image`
border-radius: 10px;
`;

const CameraImage = styled.Image`
position: absolute;
bottom: -10px;
right: -21px;
`;

