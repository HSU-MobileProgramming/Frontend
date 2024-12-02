import React from 'react'
import styled from 'styled-components'

//이미지
import ProfileImg from '../../assets/profileImg.png'
import Puzzzle from '../../assets/pinkpuzzle.png'
import { View } from 'react-native'
export default function Info() {
  return (
    <MainLayout>
      <View>
        <WrapProfile>
          <StyledImg source={ProfileImg} />
          <StyledText marginLeft="5px">여행자님</StyledText>
        </WrapProfile>

        <StyledText fontSize="20px" fontWeight="600" width="196px">
          현재까지 <StyledText color="#5C95FB" fontSize="20px" fontWeight="700">0개의 나라</StyledText>의
          <StyledText color="#5C95FB" fontSize="20px" fontWeight="700">  0개의 도시</StyledText>를 방문했어요
        </StyledText>
      </View>


      <WrapIcon>
        <StyledText fontSize="60px" zIndex="10">🌎</StyledText>
        <PuzzleImg source={Puzzzle}/>
      </WrapIcon>
    </MainLayout>
  )
}

const MainLayout = styled.View`
width: 348px;
height: 111px;
border-radius: 10px;
border: 1px solid #5C95FB;
background: #fff;
margin-bottom : 20px;
padding : 15px;
flex-direction : row;
bottom : -50;
`

const WrapProfile = styled.View`
flex-direction : row;
align-items : center;
margin-bottom : 5px;

`
const StyledImg = styled.Image`
width: ${({ width }) => width || '20px'};
height: ${({ height }) => height || '20px'};
border-radius : 20px;
`

const StyledText = styled.Text`
width : ${({ width }) => width || '70px'};
color: ${({ color }) => color || '#393939'};
font-size: ${({ fontSize }) => fontSize || '14px'};
font-weight: ${({ fontWeight }) => fontWeight || '600'};;
margin-left: ${({ marginLeft }) => marginLeft || '0px'};
z-index :  ${({ zIndex }) => zIndex || '0'};
`

const WrapIcon = styled.View`
flex-direction : row;
margin-left : 25px;
`

const PuzzleImg = styled.Image`
width: 55px;
height: 57px;
position : absolute;
right : -26;
bottom : -3;

`