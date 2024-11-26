import React from 'react'
import styled from 'styled-components'
import TravelogCard from './TravelogCard'
export default function ResultSection() {
  return (
    <MainLayout>
        <StyledText>‘도쿄’ 관련 검색결과에요! :)</StyledText>
        <TravelogCard/>
        <TravelogCard/>
        <TravelogCard/>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width : 100%;
padding : 0 16px 0 16px;
`

const StyledText = styled.Text`
color: #777;
font-family: Pretendard;
font-size: 14px;
font-weight: 500;
letter-spacing: -0.3px;
margin-bottom : 15px;
`
