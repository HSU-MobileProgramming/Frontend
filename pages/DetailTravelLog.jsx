import styled from "styled-components/native";
import { View, Text, TouchableOpacity, Modal } from "react-native";
import DetailTravelLogHeader from "../entities/DetailTravelLog/DetailTravelLogHeader";
import CurrentRecords from "../entities/DetailTravelLog/CurrentRecords";
import { useMemo, useState } from "react";
import { FlatList } from "react-native-gesture-handler";
import RecordDescriptionCard from "../entities/DetailTravelLog/RecordDescriptionCard";
import Indicator from "../entities/DetailTravelLog/Indicator";
import NavigationBar from "../shared/component/NavigationBar";

import PUZZLEMINT from '../assets/puzzle-mint.svg';
import PUZZLEPINK from '../assets/puzzle-pink.svg';
import PUZZLESKYBLUE from '../assets/puzzle-skyblue.svg';
import PHOTO from '../assets/camera.svg';
import MEMO from '../assets/memo.svg';
import TICKET from '../assets/ticket.svg';
import CARDDECOSKYBLUE from '../assets/card-deco-skyblue.svg';
import CARDDECOPINK from '../assets/card-deco-pink.svg';
import CARDDECOMINT from '../assets/card-deco-mint.svg';

import RecordOptionCard from "../entities/DetailTravelLog/RecordOptionCard";
import StandardButton from "../shared/component/StandardButton";
import EndTravelModal from "../entities/DetailTravelLog/EndTravelModal";



export default function DetailTravelLog() {
    const margin = 25;
    const offset = 264 + margin;
    const [page, setPage] = useState(0);
    const [isClickEndTravel, setIsClickEndTravel] = useState(false);

    const logData = useMemo(() => [
        {
            recordType: '사진',
            recordImage: <PHOTO />,
            decoImage: <CARDDECOSKYBLUE />,
            descriptionText1: '지금 어디에 있나요?',
            descriptionText2: '사진으로 지금 이순간을 카메라에 담아보세요!',
            puzzleImage: <PUZZLESKYBLUE />,
            borderColor: '#5C95FB'
        },
        {
            recordType: '메모',
            recordImage: <MEMO />,
            decoImage: <CARDDECOPINK />,
            descriptionText1: '어떤 생각을 하고 있나요?',
            descriptionText2: '지금 이순간의 느낌을 글로 남겨보세요!',
            puzzleImage: <PUZZLEPINK />,
            borderColor: '#FAAEC4'
        },
        {
            recordType: '티켓',
            recordImage: <TICKET />,
            decoImage: <CARDDECOMINT />,
            descriptionText1: '추억이 담긴 티켓을 있나요?',
            descriptionText2: '티켓을 추가해 소중한 추억을 간직하세요!',
            puzzleImage: <PUZZLEMINT />,
            borderColor: '#9BE4DE'
        },
        {
            recordType: '티켓',
            recordImage: <TICKET />,
            decoImage: <CARDDECOMINT />,
            descriptionText1: '추억이 담긴 티켓을 있나요?',
            descriptionText2: '티켓을 추가해 소중한 추억을 간직하세요!',
            puzzleImage: <PUZZLEMINT />,
            borderColor: '#9BE4DE'
        }

    ])
    const snapToOffsets = useMemo(() => Array.from(Array(logData.length)).map((_, index) => index * offset),
        [logData],
    );


    return (
        <MainLayout>
            <DetailTravelLogHeader />
            <View style={{ marginHorizontal: 21, marginVertical: 0 }}>
                <View style={{ marginTop: 20 }}>
                    <TitleText>기록 현황</TitleText>
                    <CurrentRecords />
                </View>
                <View style={{ marginTop: 20 }}>
                    <TitleText>기록 남기기</TitleText>
                    <FlatList
                        data={logData}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity style={{ marginRight: margin }}>
                                <RecordDescriptionCard
                                    recordImage={item.recordImage}
                                    decoImage={item.decoImage}
                                    descriptionText1={item.descriptionText1}
                                    descriptionText2={item.descriptionText2}
                                    puzzleImage={item.puzzleImage}
                                />
                            </TouchableOpacity>
                        )}
                        keyExtractor={(_, index) => String(index)}
                        snapToOffsets={snapToOffsets}
                        showsHorizontalScrollIndicator={false}
                        onScroll={(event) => {
                            const currentOffset = event.nativeEvent.contentOffset.x;
                            const currentPage = Math.round(currentOffset / offset);
                            setPage(currentPage);
                        }}
                    />
                    <IndicatorWrapper>
                        {Array.from({ length: logData.length }, (_, i) => i).map((i) => (
                            <Indicator key={i} index={`indicator_${i}`} focused={i === page} />
                        ))}
                    </IndicatorWrapper>
                </View>
                {/* 사진, 메모, 티켓 버튼 */}
                <View style={{ marginTop: 20, flexDirection: "row", justifyContent: 'space-between' }}>
                    {logData.map((data, i) => (
                        <RecordOptionCard
                            key={i}
                            recordType={data.recordType}
                            recordImage={data.recordImage}
                            borderColor={data.borderColor}
                            decoImage={data.decoImage}
                        />
                    ))}
                </View>
                <StandardButton
                    text='여행 종료'
                    color='#FD2D69'
                    backgroundColor='#FD2D691A'
                    width='100%'
                    marginTop='20px'
                    marginBottom='20px'
                    onPress={() => setIsClickEndTravel(true)}
                />
            </View>
            <Modal visible={isClickEndTravel} transparent={true} animationType="fade">
                <EndTravelModal
                    onClose={() => setIsClickEndTravel(false)}
                />
            </Modal>
            <NavigationBar mylog />

        </MainLayout>
    )
}

const MainLayout = styled.View`
background-color: #F1F1F1;
width: 100%;
height: 100%;
`;

const TitleText = styled.Text`
color: #5C95FB;
font-size: 16px;
font-weight: 600;
margin-bottom: 15px;

`;

const IndicatorWrapper = styled.View`
flex-direction: row;
justify-content: center;
gap: 8px;
margin-top: 10px;

`;