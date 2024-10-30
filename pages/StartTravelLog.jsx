import styled from "styled-components/native";
import { View, Text,Image } from "react-native";
import StartTravelLogTop from "../entities/StartLog/ui/StartTravelLogTop";
import StartTravelLogBottom from "../entities/StartLog/ui/StartTravelLogBottom";

export default function StartTravelLog() {
    
    return (
        <StartTravelLogLayout>
            <StartTravelLogTop/>
            <StartTravelLogBottom/>
        </StartTravelLogLayout>
    )
}

const StartTravelLogLayout = styled.View`
height : 100%;
align-items : center;
background-color : #fff;
`;
