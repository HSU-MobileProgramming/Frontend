import styled from "styled-components/native";
import { View, Text } from "react-native";
import PUZZLEMINT from '../../assets/puzzle-mint.svg';
import PUZZLEPINK from '../../assets/puzzle-pink.svg';
import PUZZLESKYBLUE from '../../assets/puzzle-skyblue.svg';
import PUZZLEYELLOW from '../../assets/puzzle-yellow.svg';

export default function CurrentRecords() {
    return (
        <MainLayout>
            <PuzzleRecordBox>
                <PUZZLESKYBLUE />
                <RecordCountBox>
                    <Text style={{fontSize: 18, fontWeight: 600}}>0</Text> {/* 통신 시 변경 */}
                    <Text>개</Text>
                </RecordCountBox>
            </PuzzleRecordBox>
            <PuzzleRecordBox>
                <PUZZLEYELLOW />
                <RecordCountBox>
                    <Text style={{fontSize: 18, fontWeight: 600}}>0</Text> {/* 통신 시 변경 */}
                    <Text>개</Text>
                </RecordCountBox>
            </PuzzleRecordBox>
            <PuzzleRecordBox>
                <PUZZLEMINT />
                <RecordCountBox>
                    <Text style={{fontSize: 18, fontWeight: 600}}>0</Text> {/* 통신 시 변경 */}
                    <Text>개</Text>
                </RecordCountBox>
            </PuzzleRecordBox>
            <PuzzleRecordBox>
                <PUZZLEPINK />
                <RecordCountBox>
                    <Text style={{fontSize: 18, fontWeight: 600}}>0</Text> {/* 통신 시 변경 */}
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
justify-contetn: center;
`;

const RecordCountText = styled.Text`
font-size: 18px;
font-weight: 600;
`;