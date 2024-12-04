import styled from "styled-components/native";
import { View } from "react-native";
import CreatePieceTop from "../entities/CreateTravelPiece/CreatePieceTop";
import InputMemo from "../entities/CreateTravelPiece/InputMemo";
import PhotoCapturePicker from "../entities/CreateTravelPiece/PhotoCapturePicker";
import StandardButton from "../shared/component/StandardButton";
import { useState } from "react";
import CompleteAddPiece from "../entities/CreateTravelPiece/CompleteAddPiece";
import TicketPiece from "../entities/CreateTravelPiece/TicketPiece";
import PhotoPiece from "../entities/CreateTravelPiece/PhotoPiece";
import MemoPiece from "../entities/CreateTravelPiece/MemoPiece";

export default function CreateTravelPiece({ route }) {
    const { travelId, recordType, recordImage, decoImage } = route.params; // route 객체를 통해 params에 접근해서 값을 가져와야함
    const [isClickAddPiece, setIsClickAddPiece] = useState(false);
    const [recordId, setRecordId] = useState([]);

    return (
        <MainLayout>
            {!isClickAddPiece ? (
                <>
                    <CreatePieceTop travelId={travelId} recordType={recordType} recordImage={recordImage} decoImage={decoImage} />
                    <CreatePieceBottom>
                        {(() => {
                            switch (recordType) {
                                case "메모":
                                    return <MemoPiece travelId={travelId} setIsClickAddPiece={setIsClickAddPiece} setRecordId={setRecordId}/>
                                case "사진":
                                    return (
                                        <>
                                            <PhotoPiece travelId={travelId} setIsClickAddPiece={setIsClickAddPiece} setRecordId={setRecordId}/>
                                        </>
                                    );
                                case "티켓":
                                    return (
                                        <>
                                            <TicketPiece/>
                                        </>
                                    );
                                default:
                                    return null; // 기본적으로 아무것도 렌더링하지 않음
                            }
                        })()}
                    </CreatePieceBottom>
                </>
            ) : (
                <>
                    <CompleteAddPiece recordType={recordType} onPress={() => setIsClickAddPiece(false)} recordId={recordId}/>
                </>
            )}

        </MainLayout>

    )
}

const MainLayout = styled.View`
flex: 1;
`;

const CreatePieceBottom = styled.View`
flex: 1;
padding-bottom : 20px;
align-items : center;
`;