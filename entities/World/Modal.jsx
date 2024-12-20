import React, { useEffect, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Modal as RNModal, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import StandardButton from '../../shared/component/StandardButton';
import close from '../../assets/close.png';
import PinkPuzzle from '../../assets/puzzle-pink.svg';
import YellowPuzzle from '../../assets/puzzle-yellow.svg';
import MintPuzzle from '../../assets/puzzle-mint.svg';
import SkyBluePuzzle from '../../assets/puzzle-skyblue.svg';
import { setMapColor } from './api/worldApi';

export default function Modal({ setIsShowModal, country, city, emoji, description, loadData }) {
    const Navigation = useNavigation();
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedPuzzle, setSelectedPuzzle] = useState(null);
    const [countryId, setCountryId] = useState();
    const onPressCompleteButton = async () => {
        let selectedCountryId;

        // country 값에 따라 countryId 결정
        switch (country) {
            case "베트남":
                selectedCountryId = 1;
                break;
            case "일본":
                selectedCountryId = 2;
                break;
            case "중국":
                selectedCountryId = 3;
                break;
            case "태국":
                selectedCountryId = 4;
                break;
            case "필리핀":
                selectedCountryId = 5;
                break;
            case "호주":
                selectedCountryId = 6;
                break;
            case "싱가포르":
                selectedCountryId = 7;
                break;
            case "대만":
                selectedCountryId = 8;
                break;
            case "인도네시아":
                selectedCountryId = 9;
                break;
            case "뉴질랜드":
                selectedCountryId = 10;
                break;
            case "프랑스":
                selectedCountryId = 11;
                break;
            case "미국":
                selectedCountryId = 12;
                break;
            case "스위스":
                selectedCountryId = 13;
                break;
            case "오스트리아":
                selectedCountryId = 14;
                break;
            case "체코":
                selectedCountryId = 15;
                break;
            case "이집트":
                selectedCountryId = 16;
                break;
            case "홍콩":
                selectedCountryId = 17;
                break;
            case "마카오":
                selectedCountryId = 18;
                break;
            case "몽골":
                selectedCountryId = 19;
                break;
            case "멕시코":
                selectedCountryId = 20;
                break;
            case "아랍에미리트":
                selectedCountryId = 21;
                break;
            case "이탈리아":
                selectedCountryId = 22;
                break;
            case "독일":
                selectedCountryId = 23;
                break;
            case "영국":
                selectedCountryId = 24;
                break;
            case "스페인":
                selectedCountryId = 25;
                break;
            case "터키":
                selectedCountryId = 26;
                break;
            case "러시아":
                selectedCountryId = 27;
                break;
            case "터키":
                selectedCountryId = 28;
                break;
            default:
                console.warn("알 수 없는 국가:", country);
                return; // 알 수 없는 국가인 경우 함수 종료
        }

        // console.log("완료 버튼 클릭");
        // console.log("선택된 퍼즐 색상:", selectedPuzzle);
        // console.log("나라 정보:", country);
        // console.log("countryId:", selectedCountryId);

        if (selectedPuzzle) {
            try {
                await setMapColor(selectedPuzzle, selectedCountryId);
                console.log("setMapColor 호출 성공");
                loadData()
                setIsShowModal(false); // 성공 시 모달 닫기
            } catch (error) {
                console.error("setMapColor 호출 중 에러:", error);
            }
        } else {
            console.warn("퍼즐 색상이 선택되지 않았습니다!");
        }
    };


    return (
        <RNModal
            animationType="fade"
            transparent={true}
            onRequestClose={() => {
                console.log('Modal has been closed.');
            }}
        >
            <ModalBackground>
                {currentStep === 1 ? (
                    <ModalContent>
                        <TouchableOpacity onPress={() => { setIsShowModal(false); }}>
                            <CloseImage source={close} />
                        </TouchableOpacity>

                        <TitleSection>
                            <WrapEmoji><StyledText fontSize="60px">{emoji}</StyledText></WrapEmoji>
                            <StyledText color="#FD2D69" fontSize="12px" fontWeight="700">108명이 여행했어요!</StyledText>
                            <StyledText color="#393939" fontSize="20px" fontWeight="700">{country}, {city}</StyledText>
                        </TitleSection>

                        <NotifySection>
                            <StyledText fontSize="12px">{description}</StyledText>
                        </NotifySection>

                        <ButtonSection>
                            <StandardButton backgroundColor="#A4A4A41A" color="#636363" width="161px" height="48px" text="여행기록시작" />
                            <StandardButton width="161px" height="48px" text="세계지도색칠" onPress={() => setCurrentStep(2)} />
                        </ButtonSection>
                    </ModalContent>
                ) : (
                    <ModalContent>
                        <TouchableOpacity onPress={() => { setIsShowModal(false); }}>
                            <CloseImage source={close} />
                        </TouchableOpacity>

                        <TitleSection>
                            <WrapEmoji width="51px" height="51px"><StyledText fontSize="32px">{emoji}</StyledText></WrapEmoji>
                            <StyledText color="#393939" fontSize="16px" fontWeight="700">{country}, {city}</StyledText>
                        </TitleSection>

                        <NotifySection>
                            <StyledText fontSize="16px" fontWeight="700" color="#393939">색상 선택</StyledText>
                            <StyledText fontSize="12px" fontWeight="500" color="#636363">색상은 나라 전체에 반영됩니다</StyledText>
                            <WrapPuzzle>
                                <PuzzleBox
                                    isSelected={selectedPuzzle === 'skyblue'}
                                    onPress={() => setSelectedPuzzle('skyblue')}
                                >
                                    <SkyBluePuzzle width={38} height={38} />
                                </PuzzleBox>
                                <PuzzleBox
                                    isSelected={selectedPuzzle === 'yellow'}
                                    onPress={() => setSelectedPuzzle('yellow')}
                                >
                                    <YellowPuzzle width={38} height={38} />
                                </PuzzleBox>
                                <PuzzleBox
                                    isSelected={selectedPuzzle === 'mint'}
                                    onPress={() => setSelectedPuzzle('mint')}
                                >
                                    <MintPuzzle width={38} height={38} />
                                </PuzzleBox>
                                <PuzzleBox
                                    isSelected={selectedPuzzle === 'pink'}
                                    onPress={() => setSelectedPuzzle('pink')}
                                >
                                    <PinkPuzzle width={38} height={38} />
                                </PuzzleBox>
                            </WrapPuzzle>
                        </NotifySection>

                        <ButtonSection>
                            <StandardButton backgroundColor="#A4A4A41A" color="#636363" width="161px" height="48px" text="취소" />
                            <StandardButton width="161px" height="48px" text="완료" onPress={onPressCompleteButton} />
                        </ButtonSection>
                    </ModalContent>
                )}
            </ModalBackground>
        </RNModal>
    );
}

// 스타일 정의
const ModalBackground = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.View`
  width: 348px;
  height: 333px;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
`;

const StyledText = styled.Text`
  color: ${({ color }) => color || '#636363'};
  font-size: ${({ fontSize }) => fontSize || '15px'};
  font-weight: ${({ fontWeight }) => fontWeight || '500'};
  justify-content: center;
  align-items: center;
  margin-top: ${({ marginTop }) => marginTop || '0px'};
`;

const NotifySection = styled.View`
  width: 100%;
  padding: 22px 30px 21px 30px;
  background: #F9F9F9;
`;

const TitleSection = styled.View`
  justify-content: center;
  align-items: center;
`;

const ButtonSection = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  margin-bottom: 10px;
`;

const CloseImage = styled.Image`
  width: 14px;
  height: 14px;
  margin-left: 90%;
  margin-top: 15px;
`;

const WrapEmoji = styled.View`
  width: ${({ width }) => width || '87px'};
  height: ${({ height }) => height || '87px'};
  background-color: #EAEAEA;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const WrapPuzzle = styled.View`
  flex-direction: row;
  margin-top: 17px;
`;

const PuzzleBox = styled.TouchableOpacity`
  width: 54px;
  height: 54px;
  border-radius: 10px;
  background: ${({ isSelected }) => (isSelected ? '#fff' : '#F9F9F9')};
  border: ${({ isSelected }) => (isSelected ? '1px solid #EAEAEA' : 'none')};
  justify-content: center;
  align-items: center;
  margin-right: 25px;
`;
