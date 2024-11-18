import styled from "styled-components/native";
import { View } from "react-native";
import CreatePieceTop from "../entities/CreateTravelPiece/CreatePieceTop";
import InputMemo from "../entities/CreateTravelPiece/InputMemo";
import PhotoCapturePicker from "../entities/CreateTravelPiece/PhotoCapturePicker";
import StandardButton from "../shared/component/StandardButton";

export default function CreateTravelPiece({ route }) {
    const { recordType, recordImage, decoImage } = route.params; // route 객체를 통해 params에 접근해서 값을 가져와야함


    return (
        <MainLayout>
            <CreatePieceTop recordType={recordType} recordImage={recordImage} decoImage={decoImage} />
            <CreatePieceBottom>
                {recordType === "메모" ? (
                    <InputMemo height='190px' placeholder='| 메모를 작성하세요(100자 이내)' />
                ) : (
                    <>
                        <PhotoCapturePicker />
                        <InputMemo />
                    </>
                )}
                 <StandardButton
                        text="기록 추가"
                        backgroundColor="#D3D3D3"
                        color="#FFF"
                        width="100%"
                        marginTop='auto' /* 버튼 위에 모든 여백 추가 */
                        marginBottom='30px'
                />
            </CreatePieceBottom>

        </MainLayout>
    )
}

const MainLayout = styled.View`
flex: 1;
`;

const CreatePieceBottom = styled.View`
flex: 1;
padding: 30px;
`;

const StandardButtonContainer = styled.View`
width: 100%;
`;