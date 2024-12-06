import styled from "styled-components/native";
import { View, Text } from "react-native";
import PUZZLEMINT from '../../assets/puzzle-mint.svg';
import PUZZLEPINK from '../../assets/puzzle-pink.svg';
import PUZZLESKYBLUE from '../../assets/puzzle-skyblue.svg';
import PUZZLEYELLOW from '../../assets/puzzle-yellow.svg';
import { useEffect, useState } from "react";
import { getMemoCount, getPhotoCount, getTicketCount } from "./api/pieceApi";

export default function CurrentRecords() {
    const [count, setCount] = useState({
        ticket : '',
        memo : '',
        photo : ''
    })
    useEffect(()=>{
    getTicketCount().then((tc)=>{
        getMemoCount().then((mc)=>{
            getPhotoCount().then((pc)=>{
                setCount({
                    ticket : tc,
                    memo : mc,
                    photo : pc
                })
            })
        })
    })
    },[])
    return (
        <MainLayout>
            <PuzzleRecordBox>
                <PuzzleImageBox><PUZZLESKYBLUE/></PuzzleImageBox>
                <RecordCountBox>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>{count.photo}</Text> {/* 통신 시 변경 */}
                    <Text>개</Text>
                </RecordCountBox>
            </PuzzleRecordBox>
            <PuzzleRecordBox>
                <PuzzleImageBox><PUZZLEPINK/></PuzzleImageBox>
                <RecordCountBox>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>{count.memo}</Text> {/* 통신 시 변경 */}
                    <Text>개</Text>
                </RecordCountBox>
            </PuzzleRecordBox>
            <PuzzleRecordBox>
                <PuzzleImageBox><PUZZLEYELLOW /></PuzzleImageBox>
                <RecordCountBox>
                    <Text style={{ fontSize: 18, fontWeight: 600 }}>{count.ticket}</Text> {/* 통신 시 변경 */}
                    <Text>개</Text>
                </RecordCountBox>
            </PuzzleRecordBox>
        </MainLayout>
    )
}

const MainLayout = styled.View`
width: 100%;
height: 58px;
border-radius: 10px;
background-color: #FFF;
shadow-color: #000;
shadow-offset: 0px 0px;
shadow-opacity: 0.05;
elevation: 4;
padding: 18px;
flex-direction: row;
justify-content: space-around;


`;

const PuzzleRecordBox = styled.View`
flex-direction: row;
gap: 10px;
`;

const RecordCountBox = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
`;

const RecordCountText = styled.Text`
font-size: 18px;
font-weight: 600;
`;

const PuzzleImageBox = styled.View`
width: 21px;
height: 21px;
`;

const UnitText = styled.Text`
    font-size: 14px;
    margin-left: 2px;
`;

