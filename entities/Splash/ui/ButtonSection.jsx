import React from 'react';
import styled from 'styled-components/native';
import StandardButton from '../../../shared/component/StandardButton';
import { useNavigation } from '@react-navigation/native';

export default function ButtonSection() {
  const navigation = useNavigation();

  const onPressButton = () => {
    navigation.navigate("SignUp");
  };

  const onPressText = () => {
    navigation.navigate("SignIn");
  }

  return (
    <MainLayout>
      <StandardButton
        text="E-mail로 시작하기"
        backgroundColor="#fff"
        color="#170D43"
        marginBottom="10px"
        onPress={onPressButton}
      />
      <StandardButton
        text="카카오톡으로 시작하기"
        backgroundColor="#FAE100"
        color="#170D43"
      />
      <StyledText onPress={onPressText}>이미 계정이 있으신가요?</StyledText>
    </MainLayout>
  );
}

const MainLayout = styled.View`
  height: 20%;
  width: 100%;
  align-items: center;
`;

const StyledText = styled.Text`
  color: #FFF;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  text-decoration-line: underline;
  margin-top: 28px;
`;