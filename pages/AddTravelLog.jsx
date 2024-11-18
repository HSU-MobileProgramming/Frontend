import styled from "styled-components/native";
import { View, Text, Image } from "react-native";
import AddTravelLogTop from "../entities/AddLog/ui/AddTravelLogTop";
import AddTravelLogBottom from "../entities/AddLog/ui/AddTravelLogBottom";
import { useState } from "react";

export default function AddTravelLog() {
    const [isSelectedCountry, setIsSelectedCountry] = useState('');
    return (
            <AddTravelLogLayout>
                <AddTravelLogTop onSelectedCountry={setIsSelectedCountry}/>
                <AddTravelLogBottom onSelectedCountry={isSelectedCountry}/>
            </AddTravelLogLayout>
    )
}

const AddTravelLogLayout = styled.View`
height : 100%;
align-items : center;
background-color : #fff;
`;