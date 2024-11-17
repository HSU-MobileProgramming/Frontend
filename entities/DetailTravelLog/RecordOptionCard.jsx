import styled from "styled-components/native";
import { TouchableOpacity, View, Text } from "react-native";

export default function RecordOptionCard({ recordName, recordImage, borderColor }) {
    return (
        <OptionCardTouchable>
            <MainLayout borderColor={borderColor}>
                <RecordImage>{recordImage}</RecordImage>
                <Text>{recordName}</Text>



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