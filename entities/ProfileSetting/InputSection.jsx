import React, { useState } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import StandardInput from '../../shared/component/StandardInput';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import SelectBox from './SelectBox';
import icon from '../../assets/datepickicon.png'

export default function InputSection({nickname,setNickname,country,setCountry}) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [year, setYear] = useState("YYYY");
    const [month, setMonth] = useState("MM");
    const [day, setDay] = useState("DD");

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
       // console.log(date);
        console.log("1");
        hideDatePicker();
    };
    return (
        <MainLayout>
            <StandardInput value={nickname} onChangeText={(value)=>setNickname(value)}type="닉네임" placeholder="사용할 닉네임을 입력해주세요" isShow="true" />
            <SelectSection>
                <SelectBox/>

                <WrapButton>
                <StyledText>생년월일</StyledText>

                <BirthSelectButton onPress={showDatePicker}>
                    <DateText>{year}/{month}/{day}</DateText>
                    <IconImage source={icon} />
                </BirthSelectButton>

                <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />

                </WrapButton>

            </SelectSection>
                <StandardInput value={country} onChangeText={(value)=>setCountry(value)} type="국적" placeholder="국적을 입력해주세요" isShow="true" marginTop="20px"/>
        </MainLayout>
    );
}

const MainLayout = styled.View`
margin-bottom : 55px;
`;

const StyledText = styled.Text`
color: #1F1F1F;
font-family: Pretendard;
font-size: 16px;
font-weight: 600;
margin-top: 20px;
margin-bottom : 10px;
`;

const IconImage = styled.Image`
width: 15px;
height: 17px;
`

const DateText = styled.Text`
color: #B7B7B7;
font-family: Pretendard;
font-size: 15px;
font-weight: 500;
`
const BirthSelectButton = styled.TouchableOpacity`
width: 198px;
height: 50px;
border-radius: 5px;
background-color: #FFF;
justify-content : center;
align-items : center;
padding : 13px 15px 13px 15px;
flex-direction : row;
justify-content : space-between;
`
const SelectSection = styled.View`
flex-direction : row;
`

const WrapButton = styled.View`

`