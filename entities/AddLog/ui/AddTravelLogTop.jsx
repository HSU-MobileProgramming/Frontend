import styled from "styled-components/native";
import { View, Text, Image, Modal, TouchableOpacity } from "react-native";
import { useEffect, useRef, useState } from "react";
import { countries } from "../../../shared/component/db/CountryData";
import { useNavigation } from "@react-navigation/native";

// image
import addCountryImg from '../../../assets/add-country.png';
import BACK from '../../../assets/back.png';
import SearchCountryModal from "../../../shared/component/SearchCountryModal";
import CountryImagePicker from "./CountryImagePicker";

export default function AddTravelLogTop({ setSelectedCountryId, setSelectedCityId }) {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [selectedCity, setSelectedCity] = useState('도시 추가'); // 선택된 도시 상태
    const [selectedCityIndex, setSelectedCityIndex] = useState(null);
    const navigation = useNavigation();

    const handleClickBack = () => {
        navigation.navigate("MyLog");
    }

    const toggleSearchCountryModal = () => {
        setIsModalVisible(!isModalVisible);
    };

    const handleSelectCountry = (city, countryId, index) => {
        setSelectedCity(city); // ex. 후쿠오카, 일본
        // 강제로 다시 렌더링하도록 상태 업데이트를 트리거
        setIsModalVisible(false); // 모달 닫기
        setSelectedCountryId(countryId); // 나라 아이디 전달
        setSelectedCityId(index); // 도시 아이디 전달
        setSelectedCityIndex(index);
        // console.log("selectedCountryId: " + countryId);
    };

    useEffect(() => {

    }, [selectedCity, selectedCityIndex]);

    return (
        <StartTravelLogTopLayout>
            <TouchableOpacity onPress={handleClickBack} style={{width:'50', height:'50'}}>
                <BackImage source={BACK} />
            </TouchableOpacity>
            <StartTravelLogTitle>여행 기록 시작하기</StartTravelLogTitle>
            <SettingCountryContainer>
                {selectedCity != '도시 추가' ? (
                    // <CountryImagePicker/>
                    <>
                        <CountryThumnailView>
                            {countries.at(selectedCityIndex).thumnail}
                        </CountryThumnailView>
                    </>
                ) : (
                    <SearchCountryButton onPress={toggleSearchCountryModal}>
                        <Image source={addCountryImg} />
                    </SearchCountryButton>
                )}
                <SearchCountryButton onPress={toggleSearchCountryModal}>
                    <SearchCountryText>{selectedCity}</SearchCountryText>
                </SearchCountryButton>
            </SettingCountryContainer>

            <Modal visible={isModalVisible} transparent={true} animationType="fade">
                <SearchCountryModal
                    onClose={toggleSearchCountryModal}
                    onSelectCountry={(city, countryId, index) => handleSelectCountry(city, countryId, index)}
                />
            </Modal>
        </StartTravelLogTopLayout>
    )
}

const StartTravelLogTopLayout = styled.View`
background-color : #fff;
width:100%;
height: 29%;

`;

const BackImage = styled.Image`
  position: absolute;
  top: 61px;
  left: 22px;
`;

const StartTravelLogTitle = styled.Text`
  color: #393939;
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

const SearchCountryButton = styled.TouchableOpacity`
margin-top: 15px;

`;

const SearchCountryText = styled.Text`
color: #393939;
font-size: 20px;
font-weight: 700;
line-height: 28px;

`;

const CountryThumnailView = styled.View`
width: 60px;
height: 60px;
flex-shrink: 0;
border-radius: 60px;
overflow: hidden; /* 이미지를 둥근 테두리 안에 제한 */
background-color: lightgray;
`;