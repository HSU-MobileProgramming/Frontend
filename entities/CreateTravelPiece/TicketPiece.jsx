import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import RNTextDetector from 'rn-text-detector';

import * as ImagePicker from 'expo-image-picker';
// import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
export default function TicketPiece() {
  const [response, setResponse] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [text, setText] = useState('');
  const [state, setState] = useState({
    loading: false,
    image: null,
    textRecognition: null,
    toast: {
      message: "",
      isVisible: false,
    },
  });

  useEffect(() => {
    console.log("RNTextDetector:", RNTextDetector);
   
    if (state.toast.isVisible) {
      console.log("Toast message:", state.toast.message);
      // 추가적으로 Toast를 화면에 표시하거나 다른 로직을 처리
    }
  
    if (state.image) {
      console.log("New image loaded:", state.image);
      // 이미지가 변경되었을 때 로직 추가
    }

  }, [state]);
  const handleTakePhoto = async () => {
    try {
        const result = await ImagePicker.launchCameraAsync({
            saveToPhotos: true,
            mediaTypes: ['images'], // 사진만 선택
            //allowsEditing: true, // 편집 허용
            quality: 1, // 원본 품질 유지
        });

        if (!result.canceled) {
            setResponse(result); // 전체 응답 저장
            setSelectedImage(result.assets[0].uri); // 선택된 이미지 URI 저장
            onImageSelect(result)
        } else {
            console.log("Image selection canceled");
        }


    } catch (error) {
        console.error("ImagePicker Error:", error);
    }
}

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
        onImageSelect(result)
      } else {
        console.log("Image selection canceled");
      }

    } catch (error) {
      console.error("ImagePicker Error:", error);
    }
  }

  // async function onPress(type) {
  //   setState({ ...state, loading: true });
  //   if (type === "capture") {
  //     try {
  //       const result = await ImagePicker.launchCameraAsync({
  //         mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //         allowsEditing: true,
  //         quality: 1,
  //       });
  //       onImageSelect(result);

  //     } catch (error) {
  //       console.error("ImagePicker Error:", error);
  //     }
  //   } else {
  //     launchImageLibrary({ mediaType: "image" }, onImageSelect);
  //   }
  // }

  async function onImageSelect(media) {
    try {
      if (!media) {
        setState({ ...state, loading: false });
        return;
      }
  
      if (media && media.assets) {
        const file = media.assets[0].uri;
  
        // 텍스트 인식 시도
        const textRecognition = await RNTextDetector.detectFromUri
        const INFLIGHT_IT = "Inflight IT";
  
        // 텍스트 인식 결과에서 매칭되는 항목 찾기
        const matchText = textRecognition.findIndex((item) =>
          item.text.match(INFLIGHT_IT)
        );
  
        setState({
          ...state,
          textRecognition,
          image: file,
          toast: {
            message: matchText > -1 ? "Ohhh i love this company!!" : "",
            isVisible: matchText > -1,
          },
          loading: false,
        });
      }
    } catch (error) {
      console.error("Error in onImageSelect:", error);
  
      // 에러 발생 시 상태 업데이트
      setState({
        ...state,
        loading: false,
        toast: {
          message: "An error occurred while processing the image.",
          isVisible: true,
        },
      });
    }
  }
  async function onImageSelect(media) {
    try {
      if (!media) {
        setState({ ...state, loading: false });
        return;
      }
  
      if (media && media.assets) {
        const file = media.assets[0].uri;
  
        // 텍스트 인식 시도
        const textRecognition = await RNTextDetector.detectFromUri(file);
        const INFLIGHT_IT = "Inflight IT";
  
        // 텍스트 인식 결과에서 매칭되는 항목 찾기
        const matchText = textRecognition.findIndex((item) =>
          item.text.match(INFLIGHT_IT)
        );
  
        setState({
          ...state,
          textRecognition,
          image: file,
          toast: {
            message: matchText > -1 ? "Ohhh i love this company!!" : "",
            isVisible: matchText > -1,
          },
          loading: false,
        });
      }
    } catch (error) {
      console.error("Error in onImageSelect:", error);
  
      // 에러 발생 시 상태 업데이트
      setState({
        ...state,
        loading: false,
        toast: {
          message: "An error occurred while processing the image.",
          isVisible: true,
        },
      });
    }
  }
    


  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>RN OCR SAMPLE</Text>
        <View style={getSpace(20)}>
          <TouchableOpacity style={[styles.button, styles.shadow]}
            onPress={() => handleTakePhoto()}>
            <Text>Take Photo</Text>
          </TouchableOpacity>
          <View style={getSpace(20)}>
            <TouchableOpacity
              style={[styles.button, styles.shadow]}
              onPress={() => handleTakeChoosePhoto()}
            >
              <Text>Pick a Photo</Text>
            </TouchableOpacity>
          </View>
          <View style={getSpace(50)}>
            <View loading={state.loading}>
              <View style={{ alignItems: "center" }}>
                <Image style={[styles.image, styles.shadow]}
                  source={{ uri: state.image }} />
              </View>
              {!!state.textRecognition &&
                state.textRecognition.map((item, i) => (
                  <Text key={i} style={getSpace(10)}>
                    {item.text}
                  </Text>
                ))}
              {/* {!!state.textRecognition &&
                state.textRecognition.map(
                  (item: { text: string }, i: number) => (
                    <Text key={i} style={getSpace(10)}>
                      {item.text}
                    </Text>
                  ))} */}
            </View>
          </View>
        </View>
        {state.toast.isVisible &&
        <Text>{state.toast.message}</Text>
          }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', // 배경색
  },
  content: {
    flex: 1,
    padding: 20, // 내부 여백
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333', // 제목 텍스트 색상
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff', // 버튼 배경색
    paddingVertical: 15, // 세로 여백
    paddingHorizontal: 20, // 가로 여백
    borderRadius: 10, // 버튼 테두리 둥글기
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#000', // 그림자 색상
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25, // 그림자 투명도
    shadowRadius: 3.84, // 그림자 반경
    elevation: 5, // 안드로이드 그림자 효과
  },
  image: {
    width: 200, // 이미지 너비
    height: 200, // 이미지 높이
    borderRadius: 10, // 이미지 모서리 둥글기
    marginVertical: 20, // 이미지 위아래 여백
  },
});
// 특정 공간 추가를 위한 함수 스타일
export const getSpace = (size) => ({
  marginVertical: size,
});