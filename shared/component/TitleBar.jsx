import React from 'react'
import styled from 'styled-components'
import PUZZLE from '../../assets/puzzle3.png'
export default function TitleBar({text}) {
  return (
    <MainLayout>

        <StyledImg source={PUZZLE}/>

        <StyledText>{text}</StyledText>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width: 390px;
height: 96px;
background-color : #5C95FB;
flex-direction : row;
align-items : flex-end;
padding-bottom : 15px;
padding-left : 21px;
`
const StyledImg = styled.Image`
width: 20px;
height: 20px;
margin-right : 10px;
margin-bottom : 3px;
`
const StyledText = styled.Text`
color: #FFF;
font-family: Pretendard;
font-size: 22px;
font-weight: 700;
letter-spacing: -0.3px;
`