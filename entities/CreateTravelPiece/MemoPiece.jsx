import PhotoCapturePicker from "./PhotoCapturePicker"
import InputMemo from "./InputMemo"
import StandardButton from "../../shared/component/StandardButton"
import { useState } from "react"
import styled from "styled-components/native"
import { postMemo } from "./api/CreateTravelPieceApi"


export default function MemoPiece({travelId, setIsClickAddPiece, setRecordId}) {
    const [memo, setMemo] = useState(null);

    const handleAddPiece = () => {
        const uploadedIds = [];
        if (isAllSelected) {
            postMemo(travelId, memo).then((res) => {
                console.log("메모 조각 통신 결과: ", res);
                uploadedIds.push(res.piece_id);
            });
            setIsClickAddPiece(true); // 기록추가 버튼 클릭 상태 전달 & 기록추가 완료 페이지로 이동
            setRecordId(uploadedIds);
            
        } else {
            console.log("모든 사진이 선택되지 않았거나 메모가 없습니다.");
        }
    }

    // 모든 사진이 선택되었고, 메모가 null이 아니면 true
    const isAllSelected = memo !== null;

    return (
        <MainLayout>
            <InputMemo setMemo={setMemo} height='190px' placeholder='| 메모를 작성하세요(100자 이내)' />;
            <StandardButton
                text="기록 추가"
                backgroundColor={isAllSelected ? '#5C95FB' : '#D3D3D3'}
                onPress={handleAddPiece}

            />
        </MainLayout>
    )
}

const MainLayout = styled.View`

`;