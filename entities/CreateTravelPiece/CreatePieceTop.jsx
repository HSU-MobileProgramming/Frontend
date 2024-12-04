import styled from "styled-components/native";
import { View, Text } from "react-native";
import ComponentTopBar from "../../shared/component/ComponentTopBar";
import { useNavigation } from "@react-navigation/native";

export default function CreatePieceTop({travelId, recordType, recordImage, decoImage}) {
    const navigation = useNavigation();
    const goToDetailTravelLog = () => {
        navigation.navigate("DetailTravelLog", {travel_id: travelId});
    }
    return (
        <MainLayout>
            <ComponentTopBar onPress={() => goToDetailTravelLog()}/>
            <TitleText>{recordType} 추가</TitleText>
            <DescriptionText>{recordType}을 추가한 후{"\n"}설명을 작성해보세요!</DescriptionText>
            <RecordImage>{recordImage}</RecordImage>
            <DecoImage>{decoImage}</DecoImage>
        </MainLayout>
    )
}

const MainLayout = styled.View`
width: 100%;
background: #FFF;
padding: 10% 20px;
`;

const TitleText = styled.Text`
color: #141414;
font-size: 28px;
font-weight: 700;
letter-spacing: -0.69px;
margin: 20px 0 10px;
`;

const DescriptionText = styled.Text`
color: #747474;
font-size: 18px;
font-weight: 500;
letter-spacing: -0.69px;
`;

const DecoImage = styled.View`
position: absolute;
right: 20px;
bottom: 20%;
z-index: 1;
`;

const RecordImage = styled.View`
position: absolute;
right: 40px;
bottom: 45px;
z-index: 2;
width: 50px;
height: 50px;

`;