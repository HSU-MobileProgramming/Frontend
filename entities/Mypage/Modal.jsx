import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Modal as RNModal, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import StandardButton from '../../shared/component/StandardButton';
import close from '../../assets/close.png'

export default function Modal({setIsModal}) {
    const Navigation = useNavigation();
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
                    <TouchableOpacity onPress={()=>{setIsModal(false)}}>
                        <CloseImage source={close} />
                    </TouchableOpacity>

                    <TitleSection>
                        <StyledText color="#FD2D69" fontSize="11px" fontWeight="700">아래 내용을 확인해주세요!</StyledText>
                        <StyledText color="#393939" fontSize="22px" fontWeight="700">정말 탈퇴하시겠습니다?</StyledText>
                    </TitleSection>

                    <NotifySection>
                        <StyledText> 계정 탈퇴 시 모든 데이터가 삭제됩니다.</StyledText>
                        <StyledText> 이후 복구는 불가능합니다.</StyledText>
                        <StyledText> 탈퇴 후에도 다시 언제든 가입하실 수 있습니다!</StyledText>
                    </NotifySection>

                    <ButtonSection>
                        <StandardButton backgroundColor="#A4A4A41A" color="#636363" width="161px" height="48px" text="회원탈퇴" onPress={()=>{Navigation.navigate("Splash")}}/>
                        <StandardButton width="161px" height="48px" text="취소" onPress={()=>{setIsModal(false)}} />
                    </ButtonSection>



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
align-items : center;
justify-content : space-between;
`;

const StyledText = styled.Text`
color: ${({ color }) => color || '#636363'};
font-size: ${({ fontSize }) => fontSize || '15px'};
font-weight: ${({ fontWeight }) => fontWeight || '500'};;
justify-content:center;
alien-items:center;
margin-top: ${({ marginTop }) => marginTop || '0px'};
`;
const NotifySection = styled.View`
width : 100%;
padding :22px 30px 21px 30px;
background: #F9F9F9;
`

const TitleSection = styled.View`
justify-content : center;
align-items : center;
`
const ButtonSection = styled.View`
flex-direction : row;
width :100%;
justify-content : space-evenly;
margin-bottom : 10px;
`

const CloseImage = styled.Image`
width: 14px;
height: 14px;
margin-left : 90%;
margin-top : 15px;
`