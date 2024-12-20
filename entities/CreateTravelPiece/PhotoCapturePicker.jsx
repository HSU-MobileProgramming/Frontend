import styled from "styled-components/native";
import { View, Text } from "react-native";
import AddPhotoBox from "./AddPhotoBox";

export default function PhotoCapturePicker({ selectedPhotos, onPhotoSelect }) {
    return (
        <MainLayout>
            <AddPhotoContainer>
            {selectedPhotos.map((photo, index) => (
                    <AddPhotoBox
                        key={index}
                        index={index}
                        photo={photo}
                        onPhotoSelect={onPhotoSelect}
                    />
                ))}
            </AddPhotoContainer>

            <DescriptionText>최대 4장 첨부 가능합니다</DescriptionText>
        </MainLayout>
    )
}

const MainLayout = styled.View`
margin-top: 30px;
margin-bottom: 30px;
`;

const DescriptionText = styled.Text`
color: #636363;
font-size: 14px;
font-weight: 400;
margin-top: 10px;
`;

const AddPhotoContainer = styled.View`
flex-direction: row;
gap: 10px;
`;