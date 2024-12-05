import PhotoCapturePicker from "./PhotoCapturePicker"
import InputMemo from "./InputMemo"
import StandardButton from "../../shared/component/StandardButton"
import { useState } from "react"
import styled from "styled-components/native"
import { postPhoto } from "./api/CreateTravelPieceApi"


export default function PhotoPiece({travelId, setRecordId, setIsClickAddPiece}) {
    const [selectedPhotos, setSelectedPhotos] = useState([null, null, null, null]); // 4개의 사진 선택 상태
    const [memo, setMemo] = useState(null);

    const handlePhotoSelection = (index, uri) => {
        const updatedPhotos = [...selectedPhotos];
        updatedPhotos[index] = uri;
        setSelectedPhotos(updatedPhotos);
        console.log("uri: " + uri);
    };

    const handleAddPiece = () => {
        const uploadedIds = [];
        if (isAllSelected) {
            // 선택된 모든 사진 업로드
            selectedPhotos.forEach((uri) => {
                if (uri) {
                    postPhoto(travelId, uri, memo).then((res) => {
                        console.log("사진 조각 통신 결과: ", res);
                        uploadedIds.push(res.piece_id);
                        
                    }).catch((err) => {
                        console.error("사진 업로드 실패: ", err);
                    });
                }
            });
            setRecordId(uploadedIds);
            setIsClickAddPiece(true);
        } else {
            console.log("모든 사진이 선택되지 않았거나 메모가 없습니다.");
        }
        //setIsClickAddPiece(true);
        
    }

    // 모든 사진이 선택되었고, 메모가 null이 아니면 true
    const isAllSelected = selectedPhotos.every(photo => photo !== null) && memo !== null;

    return (
        <MainLayout>
            <PhotoCapturePicker
                selectedPhotos={selectedPhotos}
                onPhotoSelect={handlePhotoSelection}
            />
            <InputMemo setMemo={setMemo} />
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