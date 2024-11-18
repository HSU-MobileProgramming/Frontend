import styled from "styled-components/native";
import { View } from "react-native";
import CreatePieceTop from "../entities/CreateTravelPiece/CreatePieceTop";
import InputMemo from "../entities/CreateTravelPiece/InputMemo";

export default function CreateTravelPiece({ route }) {
    const { recordType, recordImage, decoImage } = route.params; // route 객체를 통해 params에 접근해서 값을 가져와야함


    return (
        <MainLayout>
            <CreatePieceTop recordType={recordType} recordImage={recordImage} decoImage={decoImage} />
            {recordType === "메모" ? (
                <InputMemo height='190px' textCount='100'/>
            ) : (<InputMemo />)}
        </MainLayout>
    )
}

const MainLayout = styled.View`

`;