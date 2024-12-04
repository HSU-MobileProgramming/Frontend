import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

//이미지
import profileImage from '../../assets/profileImg.png'
import calendar from '../../assets/calendar.png'
import marker from '../../assets/marker.png'
import Tokyo from '../../assets/tokyo.png'
import Danang from '../../assets/danang.png'
import UK from '../../assets/uk.jpg'
export default function TravelogCard({title,duration,country,city,nickname}) {
    const [image,setImage] = useState();
    const [emoji,setEmoji] = useState();
    useEffect(()=>{
        switch(country) {
            case "일본" : setImage(Tokyo); setEmoji("🇯🇵"); break;
            case "베트남" : setImage(Danang); setEmoji("🇻🇳"); break;
            case "영국" : setImage(UK); setEmoji("🇬🇧"); break;
        }
    },[])
  return (
    <MainLayout>
        <BackgroundImage source={image}/>
        <Wrap>
            <StyledImage source={profileImage} width="23px" height="23px" borderRadius="23px"/>
            <StyledText>{nickname}</StyledText>
        </Wrap>

        <WrapImage>
            <StyledImage source={""} width="38px" height="38px"/>
        </WrapImage>

        <Wrap>
            <StyledText>{emoji} {title}</StyledText>
        </Wrap>

        <Line/>

        <Wrap>
            <StyledImage source={calendar} width="23px" height="23px" borderRadius="23px"/>
            <StyledText>{duration}</StyledText>
        </Wrap>

        <Wrap>
            <StyledImage source={marker} width="23px" height="23px" borderRadius="23px"/>
            <StyledText>{city}, {country}</StyledText>
        </Wrap>
        
    </MainLayout>
  )
}

const MainLayout = styled.View`
width: 348px;
height: 196px;
background-color : #11111180;
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

const BackgroundImage = styled.Image`
width: 348px;
height: 196px;
border-radius: 10px;
position : absolute;
z-index : -10;
`