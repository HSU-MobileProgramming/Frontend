import React from 'react';
import { Modal as RNModal, Text } from 'react-native';
import styled from 'styled-components/native';

export default function Modal() {
  return (
    <RNModal
      animationType="fade"
      transparent={true}
      onRequestClose={() => {
        // 모달 닫기 시 처리할 내용
        console.log('Modal has been closed.');
      }}
    >
      <ModalBackground>
        <ModalContent>

          <StyledText>모달 내용</StyledText>

        </ModalContent>
      </ModalBackground>
    </RNModal>
  );
}

// styled-components로 스타일 정의
const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
width: 348px;
height: 292px;
background-color: #fff;
border-radius: 10px;
`;

const StyledText = styled.Text`
color: ${({ color }) => color || '#636363'};
font-size: ${({fontSize}) => fontSize || '16px'};
font-weight: 600;
justify-content:center;
alien-items:center;
margin-top: ${({marginTop}) => marginTop || '0px'};
`;