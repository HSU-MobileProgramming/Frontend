import styled from "styled-components/native";
import { TouchableOpacity, View, Image } from "react-native";

import ADD from '../../assets/add-grey.png';

export default function AddPhotoBox() {
    return (
        <MainLayout>
            <Image source={ADD}/>
        </MainLayout>
    )
}

const MainLayout = styled.TouchableOpacity`
width: 80px;
height: 80px;
flex-direction: column;
justify-content: center;
align-items: center;
background: #FFF;
border-radius: 10px;
`;