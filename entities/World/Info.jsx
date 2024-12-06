import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Animated, View } from 'react-native';

// 이미지
import ProfileImg from '../../assets/profileImg.png';
import Puzzle from '../../assets/pinkpuzzle.png';
import { getUserInfo } from '../SignUp/api/userApi';

export default function Info({countryCount,cityCount}) {
  const slideAnim = useRef(new Animated.Value(200)).current; // 시작 위치 설정
  const [nickname, setNickname] = useState();
  const [image, setImage] = useState();

  useEffect(() => {
    getUserInfo().then((res) => {
      console.log(res.user);
      setNickname(res.user.nickname);
      setImage(res.user.profile_img);
    });

    // 애니메이션 실행
    Animated.timing(slideAnim, {
      toValue: 0, // 최종 위치
      duration: 400, // 지속 시간 (ms)
      useNativeDriver: true, // 네이티브 드라이버 사용
    }).start();
  }, [nickname,image]);

  return (
    <AnimatedContainer style={{ transform: [{ translateY: slideAnim }] }}>
      <View>
        <WrapProfile>
          <StyledImg source={image} />
          <StyledText marginLeft="5px">{nickname}</StyledText>
        </WrapProfile>

        <StyledText fontSize="19px" fontWeight="600" width="190px">
          현재까지{' '}
          <StyledText color="#5C95FB" fontSize="20px" fontWeight="700">
            {countryCount}개의 나라
          </StyledText>
          의{' '}
          <StyledText color="#5C95FB" fontSize="20px" fontWeight="700">
            {cityCount}개의 도시
          </StyledText>
          를 방문했어요
        </StyledText>
      </View>

      <WrapIcon>
        <StyledText fontSize="60px" zIndex="10">
          🌎
        </StyledText>
        <PuzzleImg source={Puzzle} />
      </WrapIcon>
    </AnimatedContainer>
  );
}

// 스타일 정의
const AnimatedContainer = styled(Animated.View)`
  width: 348px;
  height: 111px;
  border-radius: 10px;
  border: 1px solid #5C95FB;
  background: #fff;
  margin-bottom: 20px;
  padding: 15px;
  flex-direction: row;
  bottom: -50;
`;

const WrapProfile = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 5px;
`;

const StyledImg = styled.Image`
  width: ${({ width }) => width || '20px'};
  height: ${({ height }) => height || '20px'};
  border-radius: 20px;
`;

const StyledText = styled.Text`
  width: ${({ width }) => width || '70px'};
  color: ${({ color }) => color || '#393939'};
  font-size: ${({ fontSize }) => fontSize || '14px'};
  font-weight: ${({ fontWeight }) => fontWeight || '600'};
  margin-left: ${({ marginLeft }) => marginLeft || '0px'};
  z-index: ${({ zIndex }) => zIndex || '0'};
`;

const WrapIcon = styled.View`
  flex-direction: row;
  margin-left: 25px;
`;

const PuzzleImg = styled.Image`
  width: 55px;
  height: 57px;
  position: absolute;
  right: -26;
  bottom: -3;
`;
