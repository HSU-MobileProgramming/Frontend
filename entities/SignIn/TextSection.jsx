import React from 'react'
import styled from 'styled-components'
export default function TextSection() {
    return (
        <MainLayout>
            <StyledText marginBottom="10px"> 안녕하세요 :) </StyledText>
            <StyledText color="#636363" fontSize="18px" fontWeight="500" marginBottom="60px"> 여행조각에 오신 것을 환영합니다! </StyledText>
        </MainLayout>


    )
}

const MainLayout = styled.View`

`

const StyledText = styled.Text`
color: ${({color}) => color || '#393939'};
font-family: Pretendard;
font-size: ${({fontSize}) => fontSize || '28px'};
font-style: normal;
font-weight: ${({fontWeight}) => fontWeight || '700'};
line-height: normal;
margin-bottom : ${({marginBottom}) => marginBottom || '0px'};
`