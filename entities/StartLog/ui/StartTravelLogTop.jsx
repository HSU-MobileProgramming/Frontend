import styled from "styled-components/native";
import { View, Text, Image, Modal } from "react-native";
import { useRef, useState } from "react";

// image
import addCountryImg from '../../../assets/add-country.png';
import BACK from '../../../assets/back.png';
import SearchCountryModal from "../../../shared/component/SearchCountryModal";

export default function StartTravelLogTop() {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const countryNameRef = useRef("도시 추가");

    const toggleSearchCountryModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleSelectCountry = (city) => {
        countryNameRef.current = city; // 선택된 도시로 텍스트 변경
        // 강제로 다시 렌더링하도록 상태 업데이트를 트리거
        setIsModalVisible(false); // 모달 닫기
    };

    return (
        <StartTravelLogTopLayout>
            <BackImage source={BACK} />
            <StartTravelLogTitle>여행 기록 시작하기</StartTravelLogTitle>
            <SettingCountryContainer>
                <CountryImgSelectButton>
                    <Image source={addCountryImg} />
                </CountryImgSelectButton>
                <SearchCountryButton onPress={toggleSearchCountryModal}>
                    <SearchCountryText>{countryNameRef.current}</SearchCountryText>
                </SearchCountryButton>
            </SettingCountryContainer>

            <Modal visible={isModalVisible} transparent={true} animationType="fade">
                <SearchCountryModal
                    onClose={toggleSearchCountryModal}
                    onSelectCountry={handleSelectCountry}
                />
            </Modal>
        </StartTravelLogTopLayout>
    )
}

const StartTravelLogTopLayout = styled.View`
background-color : #fff;
width:100%;
height: 26.8%;

`;

const BackImage = styled.Image`
  position: absolute;
  top: 61px;
  left: 22px;
`;

const StartTravelLogTitle = styled.Text`
  color: var(--Black-1, #393939);
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  width:100%;
  text-align: center;
  margin-top: 58px;
`;

const SettingCountryContainer = styled.View`
width: 100%;
flex-direction: column;
align-items: center;
margin-top: 24px;
`;

const CountryImgSelectButton = styled.TouchableOpacity`

`;

const SearchCountryButton = styled.TouchableOpacity`
margin-top: 15px;

`;

const SearchCountryText = styled.Text`
color: var(--Black-1, #393939);
font-size: 20px;
font-weight: 700;
line-height: 28px;
`;