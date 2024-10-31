import styled from "styled-components/native";
import { View, Text, Image } from "react-native";
import StartTravelLogTop from "../entities/StartLog/ui/StartTravelLogTop";
import StartTravelLogBottom from "../entities/StartLog/ui/StartTravelLogBottom";
import { useState } from "react";

export default function StartTravelLog() {
    const [isSelectedCountry, setIsSelectedCountry] = useState('');
    return (
            <StartTravelLogLayout>
                <StartTravelLogTop onSelectedCountry={setIsSelectedCountry}/>
                <StartTravelLogBottom onSelectedCountry={isSelectedCountry}/>
            </StartTravelLogLayout>
    )
}

const StartTravelLogLayout = styled.View`
height : 100%;
align-items : center;
background-color : #fff;
`;