import styled from "styled-components/native";
import { Image, TextInput, TouchableOpacity, Text, View, TouchableWithoutFeedback, Keyboard } from "react-native";
import SEARCH from '../../assets/search.png';
import { useState } from "react";
import { SvgXml } from 'react-native-svg';

import { countries } from './db/CountryData';
import { FlatList } from "react-native-gesture-handler";

export default function SearchCountryModal({ onClose, onSelectCountry }) {
  const [inputText, setInputText] = useState("");
  const [isClickSearchIcon, setIsClickSearchIcon] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    setIsClickSearchIcon(!isClickSearchIcon);

    // 아무것도 입력하지 않았을 때는 더미값이 모두 나오는게 아니라 아예 안나오도록 설정
    if (inputText.trim() === "") {
      setSearchResults([]);
      return;
    }
    const results = countries.filter(
      (item) => 
        item.city.includes(inputText) || item.country.includes(inputText)
    );
    setSearchResults(results);
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ModalOverlay>
        {/* 배경을 눌렀을 때 모달 닫기 */}
        <TouchableOpacity style={{ flex: 1, width: '100%' }} activeOpacity={1} onPress={onClose}>
          <SearchContainer>
            <SearchTextInput
              placeholder="| 여행할 도시 및 국가를 검색해보세요"
              value={inputText}
              onChangeText={(text) => setInputText(text)}
              
            />
            <TouchableOpacity onPress={handleSearch}>
              <Image source={SEARCH} />
            </TouchableOpacity>
          </SearchContainer>
          {isClickSearchIcon && (
            <SearchResultBox>
              <SearchResultText style={searchResultBold}>검색 결과</SearchResultText>
              <FlatList
                data={searchResults}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                  // 이미지 경로를 동적으로 require
                  //const imagePath = require(`${item.image}`);
                  return (
                    <TouchableOpacity
                      onPress={() => {
                        onSelectCountry(item.city + "," + item.country, item.countryId, item.index);
                        onClose();
                      }}
                    >
                      <SearchResultBox>
                        {/* <SvgXml xml={item.image} width={30} height={20} /> */}
                        <SearchResultText style={searchResultLight}>
                          {item.flagImage}, {item.city}, {item.country}
                        </SearchResultText>
                      </SearchResultBox>
                    </TouchableOpacity>
                  );
                }}
              />

            </SearchResultBox>
          )}
        </TouchableOpacity>
      </ModalOverlay>
    </TouchableWithoutFeedback>
  )
}

const ModalOverlay = styled.View`
  flex: 1;
  background-color: rgba(0, 0, 0, 0.3); /* 반투명 배경 */
  
  align-items: center;
  padding: 21px;

`;

const SearchContainer = styled.View`
  width: 100%;
  height: 48px;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
 
  margin-top: 65px;
  flex-direction: row;
  justify-content: space-between;
`;

const CloseButton = styled.TouchableOpacity`
  margin-top: 10px;
  padding: 10px;
  background-color: #ddd;
  border-radius: 5px;
`;

const CloseButtonText = styled.Text`
  color: black;
`;

const SearchTextInput = styled.TextInput`
width: 80%;
color: black;
background-color: #f5f5f5; /* 배경색 명시 */
`;

const searchInputStyle = {
  width: "80%",
  color: "black",
};

const searchResultBold = {
  fontSize: 18,
  fontWeight: "700",
}
const searchResultLight = {
  fontSize: 16,
  fontWeight: "500",
  color: "#747474",
  paddingBottom: 20

}

const SearchResultBox = styled.View`
width: 100%;
border-radius: 8px;
background-color: rgba(255, 255, 255, 0.95);
//box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.10);
backdrop-filter: blur(2.5px);
padding: 20px 15px 0;
`;

const SearchResultText = styled.Text`
color: #141414;
letter-spacing: -0.3px;

`;
