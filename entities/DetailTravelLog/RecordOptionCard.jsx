import styled from "styled-components/native";
import { TouchableOpacity, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function RecordOptionCard({ recordType, recordImage, borderColor, decoImage }) {
    const navigation = useNavigation();
    const handleClickOptionCard = (recordType) => {
        navigation.navigate("CreateTravelPiece", {recordType: recordType, recordImage: recordImage, decoImage: decoImage}); // 주소 뒤에 붙는 params로 전달한것 (props가 아님)
        
    }
    
    return (
        <OptionCardTouchable onPress={() => handleClickOptionCard(recordType)}>
            <MainLayout borderColor={borderColor}>
                <RecordImage>{recordImage}</RecordImage>
                <Text>{recordType}</Text>
            </MainLayout>
        </OptionCardTouchable>
    )
}

const OptionCardTouchable = styled(TouchableOpacity)`


`;

const MainLayout = styled.View`
border-radius: 10px;
background-color: #fff;
shadow-color: #000;
shadow-offset: 0px 0px;
shadow-opacity: 0.05;
width: 80px;
height: 80px;
align-items: center;
justify-content: center;
border: 2px solid ${(props) => props.borderColor || "#000"};


`;

const RecordImage = styled.View`
width: 30px;
height: 30px;

`;