import styled from "styled-components/native";
import NavigationBar from "../shared/component/NavigationBar";
import { View, Image, Text, ScrollView } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { getAllTravelLog, getCurrentTravelLog } from "../entities/MyLog/api/MyLogApi.js";

import ADD from '../assets/add-log.svg';
import CreatedLog from "../entities/MyLog/CreatedLog";
import CurrentLog from "../entities/MyLog/CurrentLog";
import { useEffect, useState } from "react";

export default function MyLog() {
    const [allTravelLog, setAllTravelLog] = useState([]); // 생성된 여행기 저장
    const [currentTravelLog, setCurrentTravelLog] = useState(null);
    const navigation = useNavigation();
    const handleTouchableBtn = (name) => {
        if (name === "addlog") {
            navigation.navigate("AddTravelLog");
        }
    }

    const saveAllTravelLogApi = () => {
        getAllTravelLog().then((res) => {
            setAllTravelLog(res);
            console.log("Created Log: " + res);
        })
        getCurrentTravelLog().then((res) => {
            setCurrentTravelLog(res);
            console.log("Current Log: " + res);
        })
    }

    useEffect(() => {
        saveAllTravelLogApi();
    }, []);

    return (
        <MainLayout>
            <MapView />
            <ScrollViewContainer>
                <ContentContainer>
                    {!allTravelLog === null && (
                        <>
                            <TitleText>진행중인 여행</TitleText>
                            <CurrentLog />
                        </>
                    )}

                    <RowView>
                        <TitleText>생성된 여행기</TitleText>
                        <AddLogButton onPress={() => handleTouchableBtn("addlog")}>
                            {/* <Image source={ADD} style={{ width: '30', height: '30' }} /> */}
                            <ADD />
                        </AddLogButton>
                    </RowView>
                    {!allTravelLog.length === 0 ? (
                        <CreatedLog />
                    ) : (
                        <NullCreatedLogView>
                            <Text style={{ textAlign: 'center' }}>앗, 생성된 여행기가 없어요 !</Text>
                        </NullCreatedLogView>
                    )}
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
gap: 3px;
margin-bottom: 3px;
`;

const NullCreatedLogView = styled.View`
width: 100%;
height: 130px;
border-radius: 10px;
border: 1px solid #5C95FB;
shadowColor: 'rgba(253, 45, 105, 1)';
shadowOpacity: 0.1;
justify-content: center;
align-items: center;
background: rgba(92, 149, 251, 0.10);
`;