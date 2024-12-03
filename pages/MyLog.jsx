import styled from "styled-components/native";
import NavigationBar from "../shared/component/NavigationBar";
import { View, Image, Text, ScrollView, FlatList } from "react-native";

import { useNavigation } from '@react-navigation/native';
import { getAllTravelLog, getCurrentTravelLog } from "../entities/MyLog/api/MyLogApi.js";

import ADD from '../assets/add-log.svg';
import CreatedLog from "../entities/MyLog/CreatedLog";
import CurrentLog from "../entities/MyLog/CurrentLog";
import { useEffect, useState } from "react";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MyLog() {
    const [allTravelLog, setAllTravelLog] = useState([]); // 생성된 여행기 저장
    const [currentTravelLog, setCurrentTravelLog] = useState([]);
    const navigation = useNavigation();
    const itemWidth = 270; // CreatedLog의 너비와 동일
    const itemSpacing = 10; // 각 항목 사이의 간격
    const snapToOffsets = Array.from({ length: allTravelLog.length }, (_, i) => i * (itemWidth + itemSpacing));

    const handleTouchableBtn = (name) => {
        if (name === "addlog") {
            navigation.navigate("AddTravelLog");
        }
    }

    const saveAllTravelLogApi = () => {
        getAllTravelLog().then((res) => {
            setAllTravelLog(res.data);
            console.log("Created Log: " + JSON.stringify(res.data));
        })
        getCurrentTravelLog().then((res) => {
            setCurrentTravelLog(res);
            console.log("Current Log: " + JSON.stringify(res));
        })
    }

    useEffect(() => {
        saveAllTravelLogApi();
    }, []);

    useEffect(() => {
        //console.log("travel_id: " + currentTravelLog.travel_id);
        console.log("length: " + allTravelLog.length);
    }, [allTravelLog, currentTravelLog]);

    return (
        <MainLayout>
            <MapViewContainer>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    initialRegion={{
                        latitude: 37.541,
                        longitude: 126.986,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                    style={{width:'100%', height:'100%'}}
                />
            </MapViewContainer>
            <ScrollViewContainer>
                <ContentContainer>
                    {currentTravelLog.length > 0 && (
                        <>
                            <TitleText>진행중인 여행</TitleText>
                            <CurrentLog
                                travel_id={currentTravelLog[0].travel_id}
                                title={currentTravelLog[0].title}
                                start_date={currentTravelLog[0].start_date}
                                end_date={currentTravelLog[0].end_date}
                                description={currentTravelLog[0].description}
                                city_name={currentTravelLog[0].city_name}
                                country_name={currentTravelLog[0].country_name}
                            />
                        </>
                    )}

                    <RowView>
                        <TitleText>생성된 여행기</TitleText>
                        <AddLogButton onPress={() => handleTouchableBtn("addlog")}>
                            {/* <Image source={ADD} style={{ width: '30', height: '30' }} /> */}
                            <ADD />
                        </AddLogButton>
                    </RowView>
                    {allTravelLog.length > 0 ? (
                        <>
                            <FlatList
                                data={allTravelLog}
                                horizontal
                                renderItem={({ item }) => (
                                    <CreatedLog
                                        key={item.travel_id} // 고유 key 설정
                                        travel_id={item.travel_id}
                                        title={item.title}
                                        start_date={item.start_date}
                                        end_date={item.end_date}
                                        description={item.description}
                                        city_name={item.city_name}
                                        country_name={item.country_name}
                                    />
                                )}
                                keyExtractor={(item) => String(item.travel_id)}
                                snapToOffsets={snapToOffsets}
                                snapToAlignment="start"
                                decelerationRate="fast"
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{ paddingHorizontal: 0 }}
                                ItemSeparatorComponent={() => <View style={{ width: itemSpacing }} />}

                            />
                            {/* {allTravelLog.map((data, i) => (
                                <CreatedLog
                                    key={data.travel_id || i} // 고유 key 설정
                                    travel_id={data.travel_id}
                                    title={data.title}
                                    start_date={data.start_date}
                                    end_date={data.end_date}
                                    description={data.description}
                                    city_name={data.city_name}
                                    country_name={data.country_name}
                                />

                            ))} */}

                        </>
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

const MapViewContainer = styled.View`
width: 100%;
height: 235px;
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