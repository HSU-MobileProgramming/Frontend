import styled from "styled-components/native";
import { Text, View } from "react-native";
import { countries } from "../../shared/component/db/CountryData";

export default function CurrentLog({ travel_id, title, start_date, end_date, description, city_name, country_name }) {
    const formatDateWithDay = (isoDateString) => {
        const date = new Date(isoDateString);
    
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
        const day = date.getDate();
    
        const weekDayNames = ["일", "월", "화", "수", "목", "금", "토"];
        const dayOfWeek = weekDayNames[date.getDay()];
    
        return `${year}년 ${month}월 ${day}일(${dayOfWeek})`;
    };

    const cityIndex = countries.findIndex((item) => item.city === city_name); // 도시이름(city_name)으로 더미데이터의 인덱스 찾기

    return (
        <MainLayout>
            <CurrentLogContainer>
                <InfoContainer>
                    <ThumnailView>{countries[cityIndex].thumnail}</ThumnailView>
                    <ColumnView>
                        <DateText>{formatDateWithDay(start_date)} ~ {formatDateWithDay(end_date)}</DateText>
                        <TitleText>[{city_name}] {title}</TitleText>
                    </ColumnView>

                </InfoContainer>
            </CurrentLogContainer>

        </MainLayout>
    )
}

const MainLayout = styled.TouchableOpacity`
width: 100%;
height: 85px;

`;

const CurrentLogContainer = styled.View`
width: 100%;
height: 100%;
padding: 16px;
border-radius: 10px;
border: 0.6px solid #5C95FB;
background: rgba(92, 149, 251, 0.10);

`;

const InfoContainer = styled.View`
flex-direction: row;
gap: 10px;
`;

const ColumnView = styled.View`
flex-direction: column;
gap: 5px;
`;

const DateText = styled.Text`
color: #666;
font-size: 12px;
font-weight: 500;
`;

const TitleText = styled.Text`
color: #3A3A3A;
font-size: 18px;
font-weight: 600;
`;

const ThumnailView = styled.View`
width: 47px;
height: 47px;
flex-shrink: 0;
border-radius: 47px;
overflow: hidden;
`;

