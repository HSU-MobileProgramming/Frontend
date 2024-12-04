import styled from "styled-components/native";

export default function PieceInfo({category, createdAt}) {
    return (
        <MainLayout>
            <CategoryText>{category}</CategoryText>
            <CreatedAtText>{createdAt}</CreatedAtText>
            
        </MainLayout>
    )
}

const MainLayout = styled.View`
width: 100%;
height: 93px;
border-radius: 10px;
background: #FFF;

`;

const CategoryText = styled.Text`
color: #393939;
font-size: 18px;
font-weight: 600;
letter-spacing: -0.3px;
`;

const CreatedAtText = styled.Text`
color: #636363;
font-size: 12px;
font-weight: 500;
letter-spacing: -0.3px;
`;