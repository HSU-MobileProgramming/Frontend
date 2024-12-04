import styled from "styled-components/native";
import { Text } from "react-native-svg";
import { TouchableOpacity } from "react-native";
import { useState } from "react";
import { getAllTravelPiece, getTicketPieces, getMemoPieces, getPhotoPieces } from "./api/MyLogApi";
import PieceInfo from "./PieceInfo";

export default function CreatedPiece() {
    const tabList = ['전체', '📷 사진', '✍🏻 메모', '🎫 티켓'];
    const [selectedTab, setSelectedTab] = useState(0); // '전체'를 기본 선택 상태로 설정
    const [travelPiece, setTravelPiece] = useState([]);

    const handleTab = (i) => {
        setSelectedTab(i); // 선택된 탭 인덱스 저장
        if (tabList[i] === '📷 사진') {
            getPhotoPieces().then((res) => {
                console.log("사진 조각 조회 성공!" + JSON.stringify(res.photos));
                setTravelPiece(res.photos || []);

            })
        } else if (tabList[i] === '✍🏻 메모') {
            getMemoPieces().then((res) => {
                console.log("메모 조각 조회 성공!" + JSON.stringify(res.memos));
                setTravelPiece(res.memos || []);

            })
        } else if (tabList[i] === '🎫 티켓') {
            getTicketPieces().then((res) => {
                console.log("티켓 조각 조회 성공!" + JSON.stringify(res.tickets));
                setTravelPiece(res.tickets || []);

            })
        } else {
            getAllTravelPiece().then((res) => {
                console.log("전체 조각 조회 성공!" + JSON.stringify(res.pieces));
                setTravelPiece(res.pieces || []);
            })
        }
    }

    return (
        <MainLayout>
            <TabListContainer>
                {tabList.map((tab, i) => (
                    <TouchableOpacity key={i} onPress={() => handleTab(i)}>
                        <TabView isSelected={selectedTab === i}>
                            <TabText isSelected={selectedTab === i}>{tab}</TabText>
                        </TabView>
                    </TouchableOpacity>
                ))}
            </TabListContainer>
            <PieceListContainer>
                {travelPiece.length > 0 ? (
                    travelPiece.map((piece, index) => (
                        <PieceInfo
                            key={index}
                            category={piece.category}
                            createdAt={piece.created_at}
                        />
                    ))
                ) : (
                    <Text>표시할 조각이 없습니다.</Text>
                )}
            </PieceListContainer>
        </MainLayout>
    )
}

const MainLayout = styled.View`
width: 100%;
`;

const TabListContainer = styled.View`
flex-direction: row;
gap: 15px;
margin-bottom: 10px;
`;

const TabView = styled.View`
width: 79px;
height: 32px;
flex-shrink: 0;
border-radius: 100px;
background: ${(props) => (props.isSelected ? 'rgba(102, 68, 255, 0.10)' : '#FFF')};
border: ${(props) => (props.isSelected ? '1px solid #64F' : 'none')};
justify-content: center;
`;

const TabText = styled.Text`
color: ${(props) => (props.isSelected ? '#64F' : 'black')};
text-align: center;

`;

const PieceListContainer = styled.View`
width: 100%;
gap: 10px;
`;

