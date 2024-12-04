import { useDebugValue, useEffect, useState } from "react";
import styled from "styled-components/native";

import CLOCK from '../../assets/clock.svg'
export default function PieceInfo({ category, createdAt }) {
    const [type, setType] = useState();
    const formatDateWithDay = (isoDateString) => {
        const date = new Date(isoDateString);

        const year = date.getFullYear();
        const month = date.getMonth() + 1; // 월은 0부터 시작하므로 +1
        const day = date.getDate();

        return `${year}.${month}.${day}`;
    };
    useEffect(() => {
        switch (category) {
            case "ticket": setType("티켓"); break;
            case "photo": setType("사진"); break;
            case "memo": setType("메모"); break;
        }
    })
    return (
        <MainLayout>
            <Image />

            <WrapText>
                <CategoryText>{type}</CategoryText>
                <WrapDate>
                    <CLOCK />
                    <CreatedAtText>{formatDateWithDay(createdAt)}</CreatedAtText>
                </WrapDate>
            </WrapText>

        </MainLayout>
    )
}

const MainLayout = styled.View`
width: 100%;
height: 93px;
border-radius: 10px;
background: #FFF;
flex-direction : row;
`;

const CategoryText = styled.Text`
color: #393939;
font-size: 18px;
font-weight: 600;
letter-spacing: -0.3px;
margin-bottom : 12px;
`;

const CreatedAtText = styled.Text`
color: #636363;
font-size: 12px;
font-weight: 500;
letter-spacing: -0.3px;
margin-left : 7px;
`;
const Image = styled.View`
width: 93px;
height: 93px;
border-radius: 10px 0px 0px 10px;
background: #C6C6C6;
`
const WrapText = styled.View`
margin-left : 13px;
margin-top : 20px
`
const WrapDate = styled.View`
flex-direction : row;
`