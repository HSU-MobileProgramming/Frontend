import styled from "styled-components/native"
import { View, Image, TouchableOpacity } from "react-native"

import BACK from '../../assets/back.png';
import PUZZLEMINT from '../../assets/puzzle-mint.svg';
import PUZZLEPINK from '../../assets/puzzle-pink.svg';
import PUZZLESKYBLUE from '../../assets/puzzle-skyblue.svg';
import CLOSE from '../../assets/close.png';

export default function TopBar({onBackPress, onClosePress}) {
    return (
        <MainLayout>
             <PuzzleContainer>
            <PuzzleImageBox><PUZZLESKYBLUE/></PuzzleImageBox>
                <PuzzleImageBox><PUZZLEPINK/></PuzzleImageBox>
                <PuzzleImageBox><PUZZLEMINT/></PuzzleImageBox>
            </PuzzleContainer>
            <TouchableOpacity onPress={onClosePress}><CloseImage source={CLOSE}/></TouchableOpacity>

        </MainLayout>
    )
}

const MainLayout = styled.View`
flex-direction: row;
align-items: center; 
position: relative;\
margin-bottom: 35px;

`;

const BackTouchable = styled.TouchableOpacity`
bakcground-color: red;
`;

const BackImage = styled.Image`
position: absolute;
`;

const PuzzleContainer = styled.View`
flex-direction: row;
flex: 1;
justify-content: center; /* 가로 중앙 정렬 */
align-items: center; /* 수직 중앙 정렬 */
`;

const PuzzleImageBox = styled.View`
width: 21px;
height: 21px;
`;

const CloseImage = styled.Image`

`;