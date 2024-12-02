import styled from "styled-components/native";
import { Text, View } from "react-native";

export default function CurrentLog({ travel_id, title, start_date, end_date, description, city_name, country_name }) {
    return (
        <MainLayout>
            <CurrentLogContainer>
                <InfoContainer>
                    <View>{/* country_img */}</View>
                    <ColumnView>
                        <DateText>{start_date}{end_date}8/12</DateText>
                        <TitleText>{title}우정여행</TitleText>
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

