import styled from "styled-components/native";
import { Text, ImageBackground, Image } from "react-native";
import { countries } from "../../shared/component/db/CountryData";

import calendarPurple from '../../assets/calendar-purple.png';
import LOCATION from '../../assets/location.png';
import touristAttractionData from '../../shared/component/db/country.json'

export default function CreatedLog({ travel_id, title, start_date, end_date, description, city_name, country_name, setIsClickCreatedLog, setTravelId }) {
    const formatDateWithDay = (isoDateString) => {
        const date = new Date(isoDateString);

        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
        const day = date.getDate();

        return `${year}. ${month}. ${day}`;
    };
    const cityIndex = countries.findIndex((item) => item.city === city_name); // 도시이름(city_name)으로 더미데이터의 인덱스 찾기
    const handlePress = () => {
        setIsClickCreatedLog(true);
        setTravelId(travel_id);
    }
    // 이모지를 가져오는 함수
    const getCountryEmoji = (countryName) => {
        const match = touristAttractionData.touristAttraction.find(
            (item) => item.country === countryName
        );
        return match?.emoji || "🏳️";
    }
    return (
        <MainLayout onPress={handlePress}>
            <ThumnailContainer>
                <Image source={countries[cityIndex].thumnail} style={{width:'100%', height:'100%'}}/>
            </ThumnailContainer>
            <InfoContainer>
                <TitleText>{getCountryEmoji(country_name)} {title}</TitleText>
                <LineBorder />
                <RowView>
                    <Image source={calendarPurple} />
                    <DateText>{formatDateWithDay(start_date)} ~ {formatDateWithDay(end_date)}</DateText>
                </RowView>
                <RowView>
                    <Image source={LOCATION} style={{ width: '20', height: '25' }} />
                    <Text>{city_name}, {country_name}</Text>
                </RowView>

            </InfoContainer>

        </MainLayout>
    )
}

const MainLayout = styled.TouchableOpacity`
width: 275px;
height: 170px;
border-radius: 10px;
border: 0.6px solid #5C95FB;
overflow: hidden;
position: relative;

`;

const ThumnailContainer = styled.View`
 

`;

const InfoContainer = styled.View`
width: 93%;
    position: absolute;
    bottom: 0; /* 이미지의 하단에 고정 */
    left: 10px; /* 약간의 패딩 */
    background-color: rgba(255, 255, 255, 0.8); /* 반투명 배경 */
    border-radius: 8px;
    padding: 8px 12px;
`;

const TitleText = styled.Text`
    color: #170D43;
    font-size: 16px;
    font-weight: 700;
`;

const DateText = styled.Text`
    color: #555555;
    font-size: 14px;
    font-weight: 500;
`;

const LineBorder = styled.View`
width: 100%;
height: 1px;
border: 1px solid black;
margin: 5px 0;
`;

const RowView = styled.View`
flex-direction: row;
align-items: center;
margin: 3px 0;
gap: 3px;

`;
