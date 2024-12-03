import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import TravelogCard from './TravelogCard';
import { getTravels } from './api/SearchApi';



// 날짜 포맷 함수
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}.${month}.${day}`;
};

export default function ResultSection() {
  const [travelData, setTravelData] = useState([]); // 상태로 데이터 관리


  useEffect(() => {
    getTravels().then((res) => {
      console.log('여행 데이터:', res);
      // 배열 상태 업데이트
      const updatedData = res.map((item) => ({
        title: item.title,
        duration: `${formatDate(item.start_date)} ~ ${formatDate(item.end_date)}`,
        country: item.country_name,
        city: item.city_name,
        nickname : item.nickname
      }));
      setTravelData(updatedData);
    });
  }, []);

  return (
    <MainLayout>
      <StyledText>다른 사람들의 여행기에요 :)</StyledText>
      {/* travelData 배열을 기반으로 TravelogCard 렌더링 */}
      {travelData.map((data, index) => (
        <TravelogCard
          key={index}
          title={data.title}
          duration={data.duration}
          country={data.country}
          city={data.city}
          nickname={data.nickname}
        />
      ))}
    </MainLayout>
  );
}

const MainLayout = styled.View`
  width: 100%;
  padding: 0 16px 0 16px;
`;

const StyledText = styled.Text`
  color: #777;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: -0.3px;
  margin-bottom: 15px;
`;
