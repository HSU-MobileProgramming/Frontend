import React from 'react'
import styled from 'styled-components'

//이미지
import profileImage from '../../assets/profileImg.png'
import calendar from '../../assets/calendar.png'
import marker from '../../assets/marker.png'
import image from '../../assets/image.png'
export default function TravelogCard() {
  return (
    <MainLayout>
        <Wrap>
            <StyledImage source={profileImage} width="23px" height="23px" borderRadius="23px"/>
            <StyledText>아보카도 소녀</StyledText>
        </Wrap>

        <WrapImage>
            <StyledImage source={image} width="38px" height="38px"/>
        </WrapImage>

        <Wrap>
            <StyledText> 🇯🇵 먹방 여행 가보자고!</StyledText>
        </Wrap>

        <Line/>

        <Wrap>
            <StyledImage source={calendar} width="23px" height="23px" borderRadius="23px"/>
            <StyledText>2024.08.12~2024.08.17</StyledText>
        </Wrap>

        <Wrap>
            <StyledImage source={marker} width="23px" height="23px" borderRadius="23px"/>
            <StyledText>도쿄, 일본</StyledText>
        </Wrap>
        
    </MainLayout>
  )
}

const MainLayout = styled.View`
width: 348px;
height: 196px;
background-color : #999999;
border-radius: 10px;
padding : 11px 12px 11px 12px;
margin-bottom : 17px;
`
const Wrap = styled.View`
flex-direction : row;
align-items : center;
margin-bottom : 7px;
`
const WrapImage = styled.View`
justify-content : center;
align-items : center;
margin-bottom : 24px;
`

const StyledImage = styled.Image`
width : ${({ width }) => width || '20px'};
height : ${({ height }) => height || '20px'};
border-radius : ${({ borderRadius }) => borderRadius || '0px'};
margin-right : 5px;
`
;

const StyledText = styled.Text`
color: ${({ color }) => color || '#fff'};
font-size: ${({ fontSize }) => fontSize || '12px'};
font-weight: ${({ fontWeight }) => fontWeight || '600'};;
justify-content:center;
alien-items:center;
margin-top: ${({ marginTop }) => marginTop || '0px'};
`;

const Line = styled.View`
border : 0.5px solid #EAEAEA;
margin-bottom : 8px;
`