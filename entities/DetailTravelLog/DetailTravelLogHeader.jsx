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
                <HeaderIcon1 />
                <HeaderIcon2 />
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
background-color: #5C95FB;
border-bottom-right-radius: 25%;
`;

const HeaderIcon1 = styled(HEADERICON1)`
position: absolute;
top: 0;
left: 0;
`;

const HeaderIcon2 = styled(HEADERICON2)`
position: absolute;
top: 0;
right: 0;
`;

const HeaderPuzzleIcon = styled.Image`
position: absolute;
top: 108px;
right: 40px;
width: 100px;
height: 100px;

`;