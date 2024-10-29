import styled from "styled-components/native";
import { Image } from "react-native";
// image
import calendarIcon from '../../../assets/calendar-icon.png';

export default function SelectDate({text}) {
    return (
        <SelectDateBox>
            <Image source={calendarIcon}/>
            
        </SelectDateBox>
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
`;