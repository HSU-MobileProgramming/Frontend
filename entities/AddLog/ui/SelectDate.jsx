import styled from "styled-components/native";
import { Image, Text, Pressable, Modal, Platform } from "react-native";
import { Calendar } from "react-native-calendars";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { useState } from "react";

// image
import calendarGrey from '../../../assets/calendar-grey.png';
import calendarPurple from '../../../assets/calendar-purple.png';
import downArrow from '../../../assets/down-arrow.png';

export default function SelectDate({ text, onDateChange }) {
    const [date, setDate] = useState(null);
    const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);

    const handleDatePicker = () => {
        setIsDatePickerVisible(!isDatePickerVisible);
    }


    const formatDateToCustom = (date) => {
        if (!date || !(date instanceof Date)) {
            console.error("Invalid date provided:", date);
            return ""; // 기본값 반환
        }
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        return `${year}-${month}-${day}`;
    };

    return (
        <Pressable onPress={() => setIsDatePickerVisible(true)}>
            <SelectDateBox>
                <Image source={date ? calendarPurple : calendarGrey} />
                <DateText isDate={!!date}>{date ? formatDateToCustom(date) : text}</DateText>
                <Image source={downArrow} />
            </SelectDateBox>

            {/* 날짜 선택 모달 */}
            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                date={date || new Date()}
                mode="date"
                onConfirm={(date) => {
                    setIsDatePickerVisible(false);
                    setDate(date); // Date 객체로 저장
                    onDateChange(formatDateToCustom(date)); // 문자열로 변환하여 전달
                }}
                onCancel={() => {
                    setIsDatePickerVisible(false);
                }}
                display={Platform.OS === 'ios' ? 'inline' : 'default'}
            />
        </Pressable>
    )
}

const SelectDateBox = styled.View`
width: 175px;
height: 50px;
flex-shrink: 0;
border-radius: 5px;
background: #FFF;
shadow-color: rgba(41, 7, 150, 0.1);
shadow-offset: {
width: 0px;
height: 0px;
};
shadow-opacity: 0.1;
shadow-radius: 5px;
padding: 13px;
flex-direction:row;
align-items: center;
justify-content: space-between;
`;

const DateText = styled.Text`
color: ${(props) => (props.isDate ? '#393939' : '#636363')};
font-weight: 500;
width: 90px;
`;