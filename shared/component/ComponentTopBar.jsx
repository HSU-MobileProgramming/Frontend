import styled from "styled-components/native"
import { View, Image, TouchableOpacity } from "react-native"

import BACK from '../../assets/back.png';
import PUZZLEMINT from '../../assets/puzzle-mint.svg';
import PUZZLEPINK from '../../assets/puzzle-pink.svg';
import PUZZLESKYBLUE from '../../assets/puzzle-skyblue.svg';

export default function ComponentTopBar({onPress}) {
    return (
        <MainLayout>
            <TouchableOpacity onPress={onPress}><BackImage source={BACK}/></TouchableOpacity>
            <PuzzleContainer>
            <PuzzleImageBox><PUZZLESKYBLUE/></PuzzleImageBox>
                <PuzzleImageBox><PUZZLEPINK/></PuzzleImageBox>
                <PuzzleImageBox><PUZZLEMINT/></PuzzleImageBox>
            </PuzzleContainer>
        </MainLayout>
    )
}

const MainLayout = styled.View`
width: 100%;
background: #FFF;
flex-direction: row;
align-items: center; 
position: relative;

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
