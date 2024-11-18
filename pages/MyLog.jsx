import styled from "styled-components/native";
import NavigationBar from "../shared/component/NavigationBar";
import { View, Image, Text } from "react-native";
import { useNavigation } from '@react-navigation/native'

import ADD from '../assets/add-country.png';

export default function MyLog() {
    const navigation = useNavigation();
    const handleTouchableBtn = (name) => {
        if(name === "addlog") {
            navigation.navigate("AddTravelLog");
        }
    }
    
    return (
        <MainLayout>
            <MapView/>
            <TitleText>생성된 여행기</TitleText>
            <AddLogButton onPress={() => handleTouchableBtn("addlog")}>
                <Image source={ADD}/>
            </AddLogButton>
            <TitleText>여행자님의 지난 여행 조각</TitleText>

            <NavigationBar mylog />
        </MainLayout>
    )
}

const MainLayout = styled.View`
height : 100%;
justify-content : space-between;

`;
const MapView = styled.View`
width: 100%;
height: 235px;
`;

const TitleText = styled.Text`
color: #170D43;
font-size: 22px;
font-weight: 700;
letter-spacing: -0.3px;
`;

const AddLogButton = styled.TouchableOpacity`

`;