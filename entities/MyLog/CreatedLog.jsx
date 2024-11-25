import styled from "styled-components/native";
import { Text } from "react-native";
export default function CreatedLog({travel_id, title, start_date, end_date, description, city_name, country_name}) {
    return (
        <MainLayout>
            <CreatedLogContainer>
                <InfoContainer>
                    <Text>{title}</Text>
                    
                    <Text>{start_date}</Text>
                    <Text>{end_date}</Text>

                </InfoContainer>
            </CreatedLogContainer>

        </MainLayout>
    )
}

const MainLayout = styled.TouchableOpacity`
width: 276px;
height: 196px;
border-radius: 10px;
background: red;
`;

const CreatedLogContainer = styled.View`
width: 100%;
height: 100%;
position: relative;
`;

const InfoContainer = styled.View`
position: absolute;
top: 103px;
left: 0;
padding: 12px;
`;

