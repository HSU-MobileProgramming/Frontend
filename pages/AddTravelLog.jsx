import styled from "styled-components/native";
import { View, Text, Image } from "react-native";
import AddTravelLogTop from "../entities/AddLog/ui/AddTravelLogTop";
import AddTravelLogBottom from "../entities/AddLog/ui/AddTravelLogBottom";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

export default function AddTravelLog() {
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    const [selectedCityId, setSelectedCityId] = useState(null);
    const route = useRoute();
    // const {travelId} = route.params;

    useEffect(() => {
        //console.log("selectedCountryId: " + selectedCountryId);
        console.log("selectedCountryId: " + selectedCountryId);
    },[selectedCountryId])

    return (
            <AddTravelLogLayout>
                <AddTravelLogTop setSelectedCountryId={(countryId) => setSelectedCountryId(countryId)} setSelectedCityId={(index) => setSelectedCityId(index)}/>
                <AddTravelLogBottom selectedCountryId={selectedCountryId} selectedCityId={selectedCityId}/>
            </AddTravelLogLayout>
    )
}

const AddTravelLogLayout = styled.View`
height : 100%;
align-items : center;
background-color : #fff;
`;