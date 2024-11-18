import styled from "styled-components/native"
import { View, Image } from "react-native"

import BACK from '../../assets/back.png';
import PUZZLEMINT from '../../assets/puzzle-mint.svg';
import PUZZLEPINK from '../../assets/puzzle-pink.svg';
import PUZZLESKYBLUE from '../../assets/puzzle-skyblue.svg';

export default function ComponentTopBar() {
    return (
        <MainLayout>
            <BackImage source={BACK}/>
            <PuzzleContainer>
                <PUZZLESKYBLUE/>
                <PUZZLEPINK/>
                <PUZZLEMINT/>
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