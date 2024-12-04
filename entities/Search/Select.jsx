import React,{useState} from 'react'
import styled from 'styled-components'
import { TouchableOpacity, Text } from 'react-native';

export default function Select({currentSection,setIsCurrentSection}) {
    const timeZone = ['✨ 요즘 떠오르는 도시 ✨','✈️ 다른 사람들의 여행기 ✈️'];

    const selectedTimeZone = (item) => {
        setIsCurrentSection(item);
      };

    return (
        <TimeZoneContainer>
            {timeZone.map((item, index) => (
                <TimeZoneButton
                    key={index}
                    onPress={() => selectedTimeZone(item)}
                    isFocused={currentSection === item}
                    activeOpacity={1}
                >
                    <TimeZoneText isFocused={currentSection === item}>{item}</TimeZoneText>
                </TimeZoneButton>
            ))}
        </TimeZoneContainer>
    )
}


const TimeZoneContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 320px;
  height: 40px;
  margin-bottom: 24px;
  border-radius: 100px;
  border: 1px solid #E5E5EC;
  background: #FFF;
`;

const TimeZoneButton = styled(TouchableOpacity)`
  background-color: ${({ isFocused }) => (isFocused ? '#5C95FB' : '#fff')};
  display: flex;
  width:155px;
  height:30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 24px;
  justify-content: space-around;
`;

const TimeZoneText = styled.Text`
  color: ${({ isFocused }) => (isFocused ? '#fff' : '#767676')};
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  font-family: Pretendard;
  line-height: 22px;
  letter-spacing: -0.375px;
`;