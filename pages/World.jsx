import React, { useState } from 'react';
import { FlatList, Text } from 'react-native';
import NavigationBar from '../shared/component/NavigationBar';
import styled from 'styled-components/native';
import TitleBar from '../shared/component/TitleBar';
import MapSection from '../entities/World/MapSection';
import Info from '../entities/World/Info';
import StandardInput from '../shared/component/StandardInput';
import { touristAttraction } from '../shared/component/db/country.json';
import Modal from '../entities/World/Modal';

export default function World() {
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태 관리
  const [filteredData, setFilteredData] = useState([]); // 필터링된 데이터 관리 (초기에는 빈 배열)
  const [isShowModal, setIsShowModal] = useState(false);
  const [country, setCountry]= useState();
  const [city, setCity]= useState();
  const [emoji, setEmoji]= useState();
  const [description, setDescription] = useState();

  // 검색 기능
  const handleSearch = (text) => {
    setSearchQuery(text);

    // 검색어가 비어있는 경우, 결과를 초기화
    if (text.trim() === '') {
      setFilteredData([]);
      return;
    }

    const filtered = touristAttraction.filter(
      (item) =>
        item.city.toLowerCase().includes(text.toLowerCase()) ||
        item.country.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const onPressItem = (item) => {
    setCountry(item.country)
    setCity(item.city)
    setEmoji(item.emoji)
    setDescription(item.description)
    setIsShowModal(true)
  }

  return (
    <MainLayout>
      <TitleBar text="여행자님의 세계지도" />

      <Wrap>
        <StandardInput
          width="348px"
          height="48px"
          placeholder="도시 및 국가를 검색해보세요"
          isShow="false"
          zIndex="10"
          marginBottom="10px"
          value={searchQuery}
          onChangeText={handleSearch} // 검색어 입력 시 호출
        />

        {/* 검색어가 있는 경우에만 FlatList 렌더링 */}
        {searchQuery.trim() !== '' && (
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ResultItem onPress={()=>onPressItem(item)}>
                <CountryText>{item.emoji}{item.country}, {item.city}</CountryText>
              </ResultItem>
            )}
            ListEmptyComponent={() => (
              <NoResultText>검색 결과가 없습니다.</NoResultText>
            )} // 검색 결과가 없을 때 표시
            contentContainerStyle={{
              paddingBottom: 20, // 리스트 하단 여백
            }}
          />
        )}

        <Info/>
      </Wrap>

      <MapSection />

      {isShowModal && <Modal setIsShowModal={setIsShowModal} country={country} city={city} emoji={emoji} description={description} />}

      <NavigationBar world />
    </MainLayout>
  );
}

// 스타일 정의
const MainLayout = styled.View`
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Wrap = styled.View`
  height: 70%;
  justify-content: space-between;
  bottom: 40px;
`;


const ResultItem = styled.TouchableOpacity`
  padding: 15px 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.80);
`;

const CountryText = styled.Text`
color: #747474;
font-family: Pretendard;
font-size: 16px;
font-weight: 500;
`;


const NoResultText = styled.Text`
  padding: 15px 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ddd;
  flex-direction: row;
  background: rgba(255, 255, 255, 0.80);
`;
