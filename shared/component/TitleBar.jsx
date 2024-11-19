import React from 'react'
import styled from 'styled-components'
import PUZZLE from '../../assets/puzzle3.png'
import PUZZLE2 from '../../assets/bluepuzzle.png'
export default function TitleBar({text ,backgroundColor, color}) {
  return (
    <MainLayout backgroundColor={backgroundColor}>

        <StyledImg source={text==="여행자님의 세계지도"?PUZZLE:PUZZLE2}/>

        <StyledText color={color}>{text}</StyledText>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width: 390px;
height: 96px;
background-color: ${({ backgroundColor }) => backgroundColor || '#5C95FB'};
flex-direction : row;
align-items : flex-end;
padding-bottom : 15px;
padding-left : 21px;
margin-bottom : 19px;
`
const StyledImg = styled.Image`
width: 20px;
height: 20px;
margin-right : 10px;
margin-bottom : 3px;
`
const StyledText = styled.Text`
color: ${({ color }) => color || '#fff'};
font-family: Pretendard;
font-size: 22px;
font-weight: 700;
letter-spacing: -0.3px;
`