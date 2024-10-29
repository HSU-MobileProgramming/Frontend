import styled from "styled-components/native";
import { View, Text, Image } from "react-native";

// image
import addCountryImg from '../../../assets/add-country.png';
import BACK from '../../../assets/back.png';

export default function StartTravelLogTop() {
    return (
        <StartTravelLogTopLayout>
            <BackImage source={BACK} />
            <StartTravelLogTitle>여행 기록 시작하기</StartTravelLogTitle>
            <SettingCountryContainer>
                <CountryImgSelectButton>
                    <Image source={addCountryImg} />
                </CountryImgSelectButton>
                <SearchCountryButton><SearchCountryText>도시 추가</SearchCountryText></SearchCountryButton>
            </SettingCountryContainer>
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