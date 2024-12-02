import styled from "styled-components/native";
import NavigationBar from "../shared/component/NavigationBar";
import { View, Image, Text, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native'

import ADD from '../assets/add-country.png';
import CreatedLog from "../entities/MyLog/CreatedLog";
import CurrentLog from "../entities/MyLog/CurrentLog";

export default function MyLog() {
    const navigation = useNavigation();
    const handleTouchableBtn = (name) => {
        if (name === "addlog") {
            navigation.navigate("AddTravelLog");
        }
    }

    return (
        <MainLayout>
            <MapView />
            <ScrollViewContainer>
                <ContentContainer>
                    <TitleText>진행중인 여행</TitleText>
                    <CurrentLog/>
                    <RowView>
                        <TitleText>생성된 여행기</TitleText>
                        <AddLogButton onPress={() => handleTouchableBtn("addlog")}>
                            <Image source={ADD} style={{width: '30', height: '30'}}/>
                        </AddLogButton>
                    </RowView>
                    <CreatedLog />

                    <TitleText>여행자님의 지난 여행 조각</TitleText>


                </ContentContainer>
            </ScrollViewContainer>
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
background: lightblue;
`;

const TitleText = styled.Text`
color: #170D43;
font-size: 20px;
font-weight: 700;
letter-spacing: -0.3px;
margin-top: 10px;
margin-bottom: 5px;
`;

const AddLogButton = styled.TouchableOpacity`

`;

const ScrollViewContainer = styled.ScrollView`
    flex: 1;
`;

const ContentContainer = styled.View`
padding: 21px;
`;

const RowView = styled.View`
flex-direction: row;
align-items: center;
gap: 10px;
margin-bottom: 5px;
`;