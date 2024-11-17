import styled from "styled-components/native";
import { View } from "react-native";
import DetailTravelLogHeader from "../entities/DetailTravelLog/DetailTravelLogHeader";

export default function DetailTravelLog() {
    return (
        <MainLayout>
            <DetailTravelLogHeader />
        </MainLayout>
    )
}

const MainLayout = styled.View`
background-color: #F1F1F1;
width: 100%;
height: 100%;
`;