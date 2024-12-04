import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import Ticket from './Ticket';
import ADD from '../../assets/add-grey.svg';
import Modal from './Modal';
import StandardButton from '../../shared/component/StandardButton';
import { getTicket, getTicketList } from './api/ticketApi';

export default function TicketPiece() {
  const [itemWidth, setItemWidth] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [ticketId, setTicketId] = useState(null);
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    if (ticketId) {
      getTicket(ticketId).then((newTicket) => {
        console.log('getTicket 조회 성공:', newTicket);

        // 기존 tickets 배열에 새로운 ticket 추가
        setTickets((prevTickets) => [...prevTickets, newTicket]);
      });
    }

    getTicketList().then((res) => {
      console.log(res)
    })
  }, [ticketId]);

  return (
    <WrapCard>
      <ScrollView
        horizontal
        nestedScrollEnabled
        contentContainerStyle={{ width: `${100 * (tickets.length + 1)}%` }}
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
            />
          ))}

          <AddButton onPress={() => setIsShowModal(true)}>
            <ADD />
          </AddButton>

          {isShowModal && <Modal setIsShowModal={setIsShowModal} setTicketId={setTicketId} />}
        </Container>
      </ScrollView>
      <StandardButton
        text="티켓 추가 완료"
        backgroundColor="#D3D3D3"
        color="#FFF"
        marginTop='auto' /* 버튼 위에 모든 여백 추가 */
        onPress={() => setIsClickAddPiece(true)}
      />
    </WrapCard>
  );
}

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
