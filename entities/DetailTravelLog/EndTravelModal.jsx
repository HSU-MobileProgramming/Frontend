import styled from "styled-components/native";
import { View, Text } from "react-native";
import StandardButton from "../../shared/component/StandardButton";
import { useNavigation } from "@react-navigation/native";

export default function EndTravelModal({onClose, travelId, recordCountArray, onEndTravelPress}) {
    const navigation = useNavigation(); // useNavigation은 컴포넌트 본문에서 호출

    const handleEndTravel = () => {
        navigation.navigate("EndTravelLog", { travelId:travelId, recordCountArray:recordCountArray });
    };

    return (
        <ModalOverlay>
            <ModalContainer>
                <StopText>잠깐!</StopText>
                <TilteText>여행을 종료하시겠습니까?</TilteText>
                <DescriptionText>여행을 종료하면 다시 시작할 수 없으며{"\n"}여행 조각들은 여행기에 모아져서 저장됩니다.</DescriptionText>
                <ButtonContainer>
                    <StandardButton onPress={onClose} text='취소' backgroundColor='rgba(0, 0, 0, 0.10)' color='#A7A7A7' width='160px'/>
                    <StandardButton text='여행 종료' backgroundColor='#739EF6' color='#FFF' width='160px' onPress={onEndTravelPress}/>
                </ButtonContainer>
            </ModalContainer>
        </ModalOverlay>

    )
}
const ModalOverlay = styled.View`
flex: 1;
background-color: rgba(0, 0, 0, 0.3); /* 반투명 배경 */
justify-content: center;
align-items: center;
padding: 21px;

`;

const ModalContainer = styled.View`
width: 95%;
height: 208px;
background: #FFF;
padding: 10px;
flex-direction: column;
justify-content: center;
`;

const StopText = styled.Text`
color:#FD2D69;
text-align: center;
font-size: 14px;
font-weight: 700;
letter-spacing: -0.3px;
`;
const TilteText = styled.Text`
color: #393939;
text-align: center;
font-size: 22px;
font-weight: 700;
letter-spacing: -0.3px;
`;
const DescriptionText = styled.Text`
color: #636363;
text-align: center;
font-size: 15px;
font-weight: 500;
letter-spacing: -0.3px;
`;

const ButtonContainer = styled.View`
width: 100%;
flex-direction: row;
gap: 10px;
margin-top: 25px;
`;