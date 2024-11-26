import styled from "styled-components/native";
import { View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

import HEADERICON1 from '../../assets/detail-log-header-icon1.svg';
import HEADERICON2 from '../../assets/detail-log-header-icon2.svg';
import HEADERPUZZLEICON from '../../assets/detail-log-header-puzzle.png';

export default function DetailTravelLogHeader() {
    return (
        <MainLayout>
            <GradientBackground>
                <HeaderIcon1 source={HEADERICON1}/>
                <HeaderIcon2 source={HEADERICON2}/>
                <HeaderPuzzleIcon source={HEADERPUZZLEICON}/>
            </GradientBackground>
        </MainLayout>
    )
}


const MainLayout = styled.View`
width: 100%;
height: 235px;
`;


const GradientBackground = styled.View`
width: 100%;
height: 100%;
background-color: #5c95fb;
border-bottom-right-radius: 25%;
shadow-color: #000;
shadow-offset: 0px 8.575px;
shadow-opacity: 0.2;
shadow-radius: 21.438px; /* 42.876 / 2 */
elevation: 10; /* Android 그림자 효과 */
`;

const HeaderIcon1 = styled.Image`
position: absolute;
top: 0;
left: 0;
`;

const HeaderIcon2 = styled.Image`
position: absolute;
top: 0;
right: 0;
`;

const HeaderPuzzleIcon = styled.Image`
position: absolute;
top: 108px;
right: 34px;
width: 140px;
height: 110px;

`;