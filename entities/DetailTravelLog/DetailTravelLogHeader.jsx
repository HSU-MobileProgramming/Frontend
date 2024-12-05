import styled from "styled-components/native";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

import HEADERICON1 from '../../assets/detail-log-header-icon1.svg';
import HEADERICON2 from '../../assets/detail-log-header-icon2.svg';
import HEADERPUZZLEICON from '../../assets/detail-log-header-puzzle.png';
import CALENDAR from '../../assets/calendar-white.svg'
import PROF from '../../assets/profileSvg.svg'

export default function DetailTravelLogHeader({ travelId, title, cityName, countryName, travelOpen, startDate, endDate }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = String(date.getFullYear()).slice(-2); // 연도 두 자리
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월
        const day = String(date.getDate()).padStart(2, '0'); // 일
        return `${year}.${month}.${day}`;
    };
    const navigation = useNavigation();
    const handleLocation = () => {
        navigation.navigate("AddTravelLog", {travelId:travelId});
    }

    return (
        <MainLayout>
            <GradientBackground>
                <TravelLogInfoContainer>
                    <Wrap>
                        <PROF />
                        <Nickname>여행자</Nickname>
                    </Wrap>
                    <Title>{title}</Title>
                    <TouchableOpacity onPress={handleLocation}>
                        <LocationText>{cityName}, {countryName}</LocationText>
                    </TouchableOpacity>
                    <TravelOpenText>오늘은 여행 {travelOpen}일차에요!</TravelOpenText>
                    <Wrap>
                        <CALENDAR />
                        <DateText>{formatDate(startDate)} ~ {formatDate(endDate)}</DateText>
                    </Wrap>

                </TravelLogInfoContainer>
                <HeaderIcon1 source={HEADERICON1} />
                <HeaderIcon2 source={HEADERICON2} />
                <HeaderPuzzleIcon source={HEADERPUZZLEICON} />
            </GradientBackground>
        </MainLayout>
    )
}


const MainLayout = styled.View`
width: 100%;
height: 230px;
`;


const GradientBackground = styled.View`
width: 100%;
height: 100%;
background-color: #5c95fb;
border-bottom-right-radius: 25%;
shadow-color: #000;
shadow-offset: 0px 8.575px;
shadow-opacity: 0.2;
shadow-radius: 21.438px; /* 42.876 / 2 */
elevation: 10; /* Android 그림자 효과 */
padding-left: 30px;
`;

const HeaderIcon1 = styled.Image`
position: absolute;
top: 0;
left: 0;
`;

const HeaderIcon2 = styled.Image`
position: absolute;
top: 0;
right: 0;
`;

const HeaderPuzzleIcon = styled.Image`
position: absolute;
top: 90px;
right: 25px;
width: 140px;
height: 110px;

`;

const TravelLogInfoContainer = styled.View`
margin-top: 48px;
`;
const Nickname = styled.Text`
color: #F9F9F9;
font-family: Pretendard;
font-size: 14px;
font-weight: 500;
letter-spacing: -0.3px;
margin-bottom : 21px;
margin-top : 4px;
`;
const Title = styled.Text`
color: #F9F9F9;
font-family: Pretendard;
font-size: 16px;
font-weight: 500;
letter-spacing: -0.3px;
margin-bottom : 10px;
`;

const LocationText = styled.Text`
font-size: 26px;
color: #FFF;
text-decoration-line: underline;
text-decoration-style: solid;
font-weight: 700;
margin-bottom : 8px;
`;

const TravelOpenText = styled.Text`
color: #FFF;
font-family: Pretendard;
font-size: 22px;
font-weight: 700;
letter-spacing: -0.3px;
margin-bottom : 10px;
`;

const DateText = styled.Text`
color: #F9F9F9;
font-family: Pretendard;
font-size: 12px;
font-weight: 400;
letter-spacing: -0.3px;
margin-left : 6px;
margin-top : 2px;
`;


const Wrap = styled.View`
flex-direction : row;
`