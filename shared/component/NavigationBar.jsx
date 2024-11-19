import React from 'react'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'

//이미지
import worldImage from '../../assets/world.png'
import compass from '../../assets/compass.png'
import bookmark from '../../assets/bookmark.png'
import person from '../../assets/person.png'

import colorworld from '../../assets/colorworld.png'
import colorcompass from '../../assets/colorcompass.png'
import colorbookmark from '../../assets/colorbookmark.png'
import colorperson from '../../assets/colorperson.png'

export default function NavigationBar({ world, myrecord, search, mypage }) {

  const navigation = useNavigation();

  const handleTabPress = (tab) => {
    if (tab === "world") {
      navigation.navigate("World");
    } else if (tab === "search") {
      navigation.navigate("Search");
    } else if (tab === "mypage") {
      navigation.navigate("MyPage");
    }
  };

  return (
    <MainLayout>
      {
        world ?
          (
            <WrapTap onPress={() => handleTabPress("world")}>
              <StyledImg source={colorworld} />
              <StyledText color="#5C95FB">월드</StyledText>
            </WrapTap>
          ) :
          (
            <WrapTap onPress={() => handleTabPress("world")}>
              <StyledImg source={worldImage} />
              <StyledText color="#A7A7A7">월드</StyledText>
            </WrapTap>
          )
      }

      {
        myrecord ?
          (
            <WrapTap>
              <StyledImg source={colorbookmark} />
              <StyledText color="#5C95FB">나의 기록</StyledText>
            </WrapTap>
          ) :
          (
            <WrapTap>
              <StyledImg source={bookmark} />
              <StyledText color="#A7A7A7">나의 기록</StyledText>
            </WrapTap>
          )
      }

      {
        search ? (
          <WrapTap onPress={() => handleTabPress("search")}>
            <StyledImg source={colorcompass} />
            <StyledText color="#5C95FB">탐색</StyledText>
          </WrapTap>
        ) : (
          <WrapTap onPress={() => handleTabPress("search")}>
            <StyledImg source={compass} />
            <StyledText color="#A7A7A7">탐색</StyledText>
          </WrapTap>
        )
      }

      {
        mypage ?
          (

            <WrapTap onPress={() => handleTabPress("mypage")}>
              <StyledImg source={colorperson} />
              <StyledText color="#5C95FB">마이페이지</StyledText>
            </WrapTap>
          ) :
          (
            <WrapTap onPress={() => handleTabPress("mypage")}>
              <StyledImg source={person} />
              <StyledText color="#A7A7A7">마이페이지</StyledText>
            </WrapTap>
          )
      }
    </MainLayout>
  )
}


const MainLayout = styled.View`
flex-direction : row;
width: 100%;
height: 100px;
align-items : center;
justify-content : space-around;
border-radius: 20px 20px 0px 0px;
background: #FFF;
`

const WrapTap = styled.TouchableOpacity`
height : 100%;
width : 25%;
justify-content : center;
align-items : center;
`
const StyledImg = styled.Image`
width: 28px;
height: 26.462px;
margin-bottom : 6px;
`
const StyledText = styled.Text`
color: ${({ color }) => color || '#A7A7A7'};
font-family: Pretendard;
font-size: 12px;
font-weight: 500;
letter-spacing: -0.3px;
`