import React, { useEffect, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Modal as RNModal, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';
import StandardButton from '../../shared/component/StandardButton';
import close from '../../assets/close.png';
import StandardInput from '../../shared/component/StandardInput';
import { setTicket } from './api/ticketApi';
import SelectDate from '../AddLog/ui/SelectDate';

export default function Modal({ setIsShowModal,setTicketId }) {
    const Navigation = useNavigation();
    const [date, setDate] = useState('날짜');
    const [formattedDate, setFormattedDate] = useState('');
    const [ticketInfo, setTicketInfo] = useState({
        travel_id: 5,
        city: '',
        ticket_date: '',
        place: '',
    });

    // 날짜 포맷 함수
    const formatDate = (inputDate) => {
        const [month, day, year] = inputDate.split('/');
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    };

    const handleInputChange = (field, value) => {
        setTicketInfo((prev) => ({ ...prev, [field]: value }));
    };

    const onPressButton = async () => {
        try {
            const travelRecordId = await setTicket(ticketInfo.travel_id, ticketInfo.place, formatDate(date), ticketInfo.city);
            setTicketId(travelRecordId)
            setIsShowModal(false);
        } catch (error) {
            console.error('티켓 추가 중 오류:', error);
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
                <ModalContent>
                    <TouchableOpacity onPress={() => setIsShowModal(false)}>
                        <CloseImage source={close} />
                    </TouchableOpacity>

                    <TitleSection>
                        <StyledText color="#FD2D69" fontSize="11px" fontWeight="700">티켓 추가</StyledText>
                        <StyledText color="#393939" fontSize="20px" fontWeight="700">추가할 티켓의 정보를 입력해주세요!</StyledText>
                    </TitleSection>

                    <NotifySection>
                        <StandardInput
                            value={ticketInfo.city}
                            onChangeText={(value) => handleInputChange('city', value)}
                            height="40px"
                            type="도시"
                            placeholder="도시를 입력해주세요"
                            isShow={true}
                            marginBottom="10px"
                        />
                        <StandardInput
                            value={ticketInfo.place}
                            onChangeText={(value) => handleInputChange('place', value)}
                            height="40px"
                            type="장소"
                            placeholder="어떤 티켓인가요?"
                            isShow={true}
                            marginBottom="10px"
                        />
                        <WrapDate>
                            <SelectDate text={date} onDateChange={setDate} />
                        </WrapDate>
                    </NotifySection>

                    <ButtonSection>
                        <StandardButton
                            backgroundColor="#A4A4A41A"
                            color="#636363"
                            width="161px"
                            height="48px"
                            text="취소"
                            onPress={() => setIsShowModal(false)}
                        />
                        <StandardButton
                            width="161px"
                            height="48px"
                            text="추가"
                            onPress={onPressButton}
                        />
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
  height: 450px;
  background-color: #fff;
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
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
  background-color: #F9F9F9;
  border-radius: 10px;
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

const WrapDate = styled.View``;
