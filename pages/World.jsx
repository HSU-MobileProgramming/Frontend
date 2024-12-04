import React, { useState, useEffect } from 'react';
import { FlatList, Text } from 'react-native';
import NavigationBar from '../shared/component/NavigationBar';
import styled from 'styled-components/native';
import TitleBar from '../shared/component/TitleBar';
import MapSection from '../entities/World/MapSection';
import Info from '../entities/World/Info';
import StandardInput from '../shared/component/StandardInput';
import { touristAttraction } from '../shared/component/db/country.json';
import Modal from '../entities/World/Modal';
import { getMapColor } from '../entities/World/api/worldApi';
import { getUserInfo } from '../entities/SignUp/api/userApi';

export default function World() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowList, setIsShowList] = useState(true);
  const [country, setCountry] = useState();
  const [city, setCity] = useState();
  const [emoji, setEmoji] = useState();
  const [description, setDescription] = useState();
  const [userInfo, setUserInfo] = useState({ nickname: '', profileImage: '' }); // useState로 상태 관리

  const [colors, setColors] = useState([]);
  const [countryIds, setCountryIds] = useState([]);
  const [countryCount,setCountryCount] = useState();
  const [cityCount,setCiryCount] = useState();
  const loadData = () => {
    getMapColor().then((res) => {
      console.log(res);
  
      if (res?.visits?.length) {
        const colorMap = {
          pink: '#FAAEC4',
          yellow: '#FFDD92',
          skyblue: '#739EF6',
          mint: '#9BE4DE',
        };
  
        const ids = res.visits.map((visit) => visit.country_id);
        const uniqueCountryIds = [...new Set(ids)]; // 중복 제거
        const mappedColors = res.visits.map((visit) => colorMap[visit.color] || '#D2D2D2');
  
        setCountryIds(ids);
        setColors(mappedColors);
        setCountryCount(uniqueCountryIds.length); // 고유한 country_id의 개수
        setCiryCount(res.visits.length); // 전체 방문 수
      } else {
        setCountryCount(0);
        setCiryCount(0);
      }
    });
  };
  

  useEffect(() => {
    loadData();
    getUserInfo().then((res) => {
      setUserInfo({ nickname: res.nickname, profileImage: res.profile_img }); // 상태 업데이트
    });
  }, []);

  const handleSearch = (text) => {
    setSearchQuery(text);

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
    setCountry(item.country);
    setCity(item.city);
    setEmoji(item.emoji);
    setDescription(item.description);
    setIsShowModal(true);
    setIsShowList(false);
  };

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
          onChangeText={(text) => {
            handleSearch(text);
            setIsShowList(true);
          }}
        />

        {searchQuery.trim() !== '' && isShowList && (
          <FlatList
            data={filteredData}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <ResultItem onPress={() => onPressItem(item)}>
                <CountryText>{item.emoji}{item.country}, {item.city}</CountryText>
              </ResultItem>
            )}
            ListEmptyComponent={() => <NoResultText>검색 결과가 없습니다.</NoResultText>}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}

        <Info userInfo={userInfo} countryCount={countryCount} cityCount={cityCount} />
      </Wrap>

      <MapSection colors={colors} countryIds={countryIds} />

      {isShowModal && (
        <Modal
          setIsShowModal={(visible) => {
            setIsShowModal(visible);
            if (!visible) setIsShowList(false);
          }}
          country={country}
          city={city}
          emoji={emoji}
          description={description}
          loadData={loadData}
        />
      )}

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
