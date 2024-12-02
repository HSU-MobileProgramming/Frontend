import styled from "styled-components/native";
import { View, Image, Text, TouchableOpacity } from "react-native";
import BACK from '../../assets/back.png';
import CHECKPUZZLESKYBLUE from '../../assets/checkpuzzle-skyblue.svg';
import CHECKPUZZLEPINK from '../../assets/checkpuzzle-pink.svg';
import CHECKPUZZLEMINT from '../../assets/checkpuzzle-mint.svg';
import StandardButton from "../../shared/component/StandardButton";

export default function CompleteAddPiece({ recordType, onPress }) {
    const renderPuzzleImage = () => {
        switch (recordType) {
            case "사진":
                return <CHECKPUZZLESKYBLUE />
            case "메모":
                return <CHECKPUZZLEPINK />
            case "티켓":
                return <CHECKPUZZLEMINT />

        }
    }

    const renderButtonColor = () => {
        switch (recordType) {
            case "사진":
                return "#5C95FB"; // Skyblue
            case "메모":
                return "#FAAEC4"; // Pink
            case "티켓":
                return "#9BE4DE"; // Mint
        }
    };

    return (
        <MainLayout>
            <TouchableOpacity onPress={onPress}><Image source={BACK} /></TouchableOpacity>
            <TopContainer>
                <PuzzleImageBox>{renderPuzzleImage()}</PuzzleImageBox>
                <CompleteText>기록 추가 완료!</CompleteText>
                <DateText>20xx.xx.xx</DateText> {/* 통신시 변경 */}
            </TopContainer>
            <PreviewContainer>
                <PreviewText>미리보기</PreviewText>
                <PreviewBox>

                </PreviewBox>
            </PreviewContainer>
            <StandardButton
                text={'완료'}
                width={'100%'}
                marginTop={'auto'} /* 버튼 위에 모든 여백 추가 */
                backgroundColor={renderButtonColor()}
            />

        </MainLayout>
    )
}

const MainLayout = styled.View`
width: 100%;
flex:1; /* 컴포넌트의 남은 공간을 모두 채움 */
padding: 12% 20px;
background: #FFF;
`;

const TopContainer = styled.View`
height: 50%;
justify-content: center;
align-items: center;
gap: 17px;
`;

const PuzzleImageBox = styled.View`
width: 67px;
height: 67px;
`;

const CompleteText = styled.Text`
color: #141414;
font-size: 28px;
font-weight: 700;
letter-spacing: -0.69px;
`;

const DateText = styled.Text`

`;

const PreviewContainer = styled.View`

`;

const PreviewText = styled.Text`
color: #393939;
font-size: 16px;
font-weight: 600;
letter-spacing: -0.3px;
`;

const PreviewBox = styled.View`
width: 100%;
height: 20%;
border-radius: 11.501px;
border: 2.3px solid #EAEAEA;
background: #FFF;
shadow-color: rgba(0, 0, 0, 1); /* 그림자 색상 */
shadow-offset: 0px 0px; /* x축, y축 오프셋 */
shadow-opacity: 0.1; /* 불투명도 */
shadow-radius: 11.501px; /* 그림자 흐림 정도 */
margin-top: 10px;
`;
