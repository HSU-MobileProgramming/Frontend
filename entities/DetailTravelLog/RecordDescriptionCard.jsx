import styled from "styled-components/native";
import { View, Text } from "react-native";


export default function RecordDescriptionCard({recordType,recordImage, decoImage, descriptionText1, descriptionText2, puzzleImage}) {
    return (
        <MainLayout>
            <DescriptionBox>
                <DescriptionTextBold>{descriptionText1}</DescriptionTextBold>
                <PuzzleImageBox>{puzzleImage}</PuzzleImageBox>
            </DescriptionBox>
            <DescriptionTextLight>{descriptionText2}</DescriptionTextLight>
            {
                    recordType === "티켓" ?
                        <Ticket>{recordImage}</Ticket> :
                        <RecordImage>{recordImage}</RecordImage>
            }
            <DecoImage>{decoImage}</DecoImage>
        
        </MainLayout>
    )
}

const MainLayout = styled.View`
width: ${(props) => props.size || '264px'};
height: 148px;
border-radius: 10px;
background-color: #FFF;
shadow-color: #000;
shadow-offset: 0px 0px;
shadow-opacity: 0.05;
padding: 14px;
`;

const DescriptionBox = styled.View`
flex-direction: row;
gap: 4px;
`;

const DescriptionTextBold = styled.Text`
width: auto;
color: #393939;
font-size: 18px;
font-weight: 600;
align-self: flex-start; /* 부모의 flex 영향을 받지 않고, 텍스트 길이만큼 가로길이가 정해지도록 함 */
`;

const DescriptionTextLight = styled.Text`
width : 128px;
color: #747474;
font-size: 14px;
font-weight: 500;
letter-spacing: -0.3px;
`;

const DecoImage = styled.View`
position: absolute;
right: 10px;
bottom: 10px;
z-index: 1;
`;

const RecordImage = styled.View`
position: absolute;
right: 30px;
bottom: 30px;
z-index: 2;
width: 50px;
height: 50px;
`;

const PuzzleImageBox = styled.View`
width: 21px;
height: 21px;
`;

const Ticket = styled.Text`
position: absolute;
right: 30px;
bottom: 20px;
font-size: 50px;
`
