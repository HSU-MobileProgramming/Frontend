import React,{useState} from 'react';
import { Button } from 'react-native';
import styled from 'styled-components/native';
import StandardInput from '../../shared/component/StandardInput';
import RNPickerSelect from 'react-native-picker-select';
import DateTimePickerModal from "react-native-modal-datetime-picker";

import SelectBox from './SelectBox';

export default function InputSection() {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };
    return (
        <MainLayout>
            <StandardInput type="닉네임" placeholder="사용할 닉네임을 입력해주세요" />

            <SelectBox />

            <BirthSelectButton title="YYYY/MM/DD" onPress={showDatePicker} />

            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

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
                            width: 348,
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

const BirthSelectButton = styled.Button`
border-radius: 5px;
background-color: #FFF;
color: #B7B7B7;
font-family: Pretendard;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
`