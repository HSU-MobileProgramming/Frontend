import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Ticket from './Ticket';
import ADD from '../../assets/add-grey.svg';
import Modal from './Modal';
import StandardButton from '../../shared/component/StandardButton';
import { getTicket, getTicketList } from './api/ticketApi';
import { useNavigation } from '@react-navigation/native';

export default function TicketPiece() {
  const navigation = useNavigation()
  const [itemWidth, setItemWidth] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [tickets, setTickets] = useState([
    // {
    //   travel_record_id: 11,
    //   place: '디즈니 랜드',
    //   city: '도쿄',
    //   ticket_date: '2024-12-03',
    // },
  ]);

  const loadTickets = async () => {
    try {
      const response = await getTicketList(); // getTicketList 호출
      console.log('getTicketList 조회 성공:', response);

      const ticketDetails = await Promise.all(
        response.tickets.map(async (ticket) => {
          const detail = await getTicket(ticket.travel_record_id); // 각 travel_record_id로 getTicket 호출
          return detail;
        })
      );
      setTickets((prevTickets) => [...prevTickets, ...ticketDetails]); // 기존 tickets에 새 데이터 추가
    } catch (error) {
      console.error('티켓 데이터 가져오기 오류:', error);
    }
  };

  useEffect(() => {
    loadTickets();
  }, []);

  return (
    <WrapCard>
      <ScrollView
        horizontal
        nestedScrollEnabled
        scrollEventThrottle={200}
        decelerationRate="fast"
        onContentSizeChange={(w) => setItemWidth(w / (tickets.length + 1))}
        showsHorizontalScrollIndicator={false}
      >
        <Container>
          {tickets.map((item, index) => (
            <Ticket
              key={item.travel_record_id}
              place={item.place}
              city={item.city}
              ticket_date={item.ticket_date}
              length={tickets.length + 1}
              marginLeft={index === 0 ? '47px' : '0px'}
              index={index}
            />
          ))}

          <AddButton onPress={() => setIsShowModal(true)}>
            <ADD />
          </AddButton>

          {isShowModal && (
            <Modal setIsShowModal={setIsShowModal} setTickets={setTickets} />
          )}
        </Container>
      </ScrollView>

      <StandardButton
        text="티켓 추가 완료"
        backgroundColor="#5C95FB"
        color="#FFF"
        marginTop="auto"
        onPress={()=>navigation.navigate("DetailTravelLog")}
      />
    </WrapCard>
  );
}

// 스타일 정의
const WrapCard = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const AddButton = styled.TouchableOpacity`
  width: 80px;
  height: 80px;
  flex-direction: column;
  background: #fff;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
