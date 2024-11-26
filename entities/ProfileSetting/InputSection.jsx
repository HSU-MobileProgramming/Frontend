import React, { useState } from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import StandardInput from '../../shared/component/StandardInput';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import SelectBox from './SelectBox';
import icon from '../../assets/datepickicon.png'

export default function InputSection() {
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
            <StandardInput type="닉네임" placeholder="사용할 닉네임을 입력해주세요" />
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

            <>
                <StyledText>국적</StyledText>
                <RNPickerSelect
                    onValueChange={(value) => console.log(value)}
                    items={[
                        { label: '중국', value: '중국' },
                        { label: '일본', value: '일본' },
                        { label: '베트남', value: '베트남' },
                        { label: '태국', value: '태국' },
                        { label: '필리핀', value: '필리핀' },
                        { label: '싱가포르', value: '싱가포르' },
                        { label: '대만', value: '대만' },
                        { label: '인도네시아', value: '인도네시아' },
                        { label: '호주', value: '호주' },
                        { label: '뉴질랜드', value: '뉴질랜드' },
                        { label: '프랑스', value: '프랑스' },
                        { label: '이탈리아', value: '이탈리아' },
                        { label: '독일', value: '독일' },
                        { label: '이탈리아', value: '이탈리아' },
                        { label: '영국', value: '영국' },
                        { label: '스페인', value: '스페인' },
                        { label: '튀르키에', value: '튀르키에' },
                        { label: '미국', value: '미국' },
                        { label: '캐나다', value: '캐나다' },
                        { label: '스위스', value: '스위스' }
                    ]}
                    placeholder={{ label: '대한민국', value: '대한민국', color: '#9EA0A4' }}
                    style={{
                        inputIOS: {
                            color: 'black',
                            backgroundColor: '#fff',
                            width: 328,
                            height: 50                        
                        },
                        inputAndroid: { color: 'black' },
                        placeholder: { color: 'gray' },
                    }}
                />
            </>
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