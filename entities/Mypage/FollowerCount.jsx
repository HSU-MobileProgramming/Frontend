import React from 'react'
import styled from 'styled-components'
export default function FollowerCount() {
    return (
        <MainLayout>

            <WrapText>
                <StyledText1>0</StyledText1>
                <StyledText2>팔로워</StyledText2>
            </WrapText>

            <WrapText>
                <StyledText1>0</StyledText1>
                <StyledText2>팔로잉</StyledText2>
            </WrapText>

            <WrapText>
                <StyledText1>1</StyledText1>
                <StyledText2>여행기</StyledText2>
            </WrapText>


        </MainLayout>
    )
}

const MainLayout = styled.View`
flex-direction : row;
width : 100%;
height : 70px;
justify-content : space-evenly;
padding : 0 5% 0 5%;
`

const StyledText1 = styled.Text`
color: #393939;
font-family: Pretendard;
font-size: 20px;
font-weight: 600;
`
const StyledText2 = styled.Text`
color: #A7A7A7;
font-family: Pretendard;
font-size: 14px;
font-weight: 500;
`

const WrapText = styled.View`
width : 30%;
justify-content : center;
align-items : center;
`