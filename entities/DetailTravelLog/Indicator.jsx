import styled from "styled-components/native";
import { View } from "react-native";

export default function Indicator({index, focused}) {
    return (
        <MainLayout focused={focused}>

        </MainLayout>
    )
}
const MainLayout = styled.View`
width: 5px;
height: 5px;
flex-shrink: 0;
border-radius: 3px;
background: ${({focused}) => (focused ? '#9D9D9D' : '#D1D1D1')};
`;