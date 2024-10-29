import styled from "styled-components/native";
import { View, Text, TextInput } from "react-native";
import SelectDate from "./SelectDate";
import StandardButton from "../../../shared/component/StandardButton";

export default function StartTravelLogBottom() {
    return (
        <StartTravelLogBottomLayout>
            <SettingDateContainer>
                <SettingTitle>여행 기간</SettingTitle>
                <SelectDateContainer>
                    <SelectDate text={"시작 날짜"}/>
                    <SelectDate text={"종료 날짜"}/>
                </SelectDateContainer>
            </SettingDateContainer>
            <SettingTitleContainer>
                <SettingTitle>여행 제목</SettingTitle>
                <TitleInputText
                placeholder="| 여행 제목을 입력해주세요(15자 이내)"
                placeholderTextColor="#A7A7A7"
                />
            </SettingTitleContainer>
            <StandardButton
            text="여행 기록 시작하기"
            color="#FFF"
            width="100%"
            height="60px"
            borderRadius="5px"
            backgroundColor="#D3D3D3"
            
            />
            
        </StartTravelLogBottomLayout>
    )
}

const StartTravelLogBottomLayout = styled.View`
background-color: #F1F4FB;
width:100%;
height: 100%;
padding: 0 21px;
`;

const SettingDateContainer = styled.View`
margin-top: 30px;
`;

const SettingTitleContainer = styled.View`
margin-top: 20px;
margin-bottom: 303px;
`;

const SettingTitle = styled.Text`
color: #1F1F1F;
font-size: 16px;
font-style: normal;
font-weight: 600;
margin-bottom: 10px;
`;

const TitleInputText = styled.TextInput`
    width: 100%;
    height: 50px;
    border-radius: 5px;
    background-color: #FFF;
    shadow-color: rgba(41, 7, 150, 0.1);
    shadow-offset: {
        width: 0px;
        height: 0px;
    };
    shadow-opacity: 0.1;
    shadow-radius: 5px;
    elevation: 5; /* Android에서 그림자 효과 */
    padding: 15px;
`;

const SelectDateContainer = styled.View`
width:100%;
flex-direction: row;
justify-content: space-between;
`;


