import styled from "styled-components/native";
import { View, Text, TextInput } from "react-native";
import SelectDate from "./SelectDate";
import StandardButton from "../../../shared/component/StandardButton";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { postCreateTravel, putTravel } from "./api/AddLogApi";

export default function AddTravelLogBottom({selectedCountryId, selectedCityId, travel_id}) {
    const [isAllSelected, setIsAllSelected] = useState(false);
    const [countryId, setCountryId] = useState(selectedCountryId);
    const [cityId, setCityId] = useState(selectedCityId);
    const [startDate, setStartDate] = useState('시작 날짜');
    const [endDate, setEndDate] = useState('종료 날짜');
    const [logTitle, setLogTitle] = useState(null);
    const navigation = useNavigation();
    const [travelId, setTravelId] = useState(null);

    useEffect(()  => {
        console.log("도시 아이디: " + selectedCityId);
        console.log("나라 아이디: " + selectedCountryId);
    },[]);

    useEffect(() => {
        if (startDate !== '시작 날짜' && endDate !== '종료 날짜' && selectedCountryId !== null && logTitle) {
            setIsAllSelected(true);
        } else {
            setIsAllSelected(false);
        }
    },[startDate, endDate, selectedCountryId, logTitle])
    
    const handleCreateTravelLogBtn = () => {
        console.log(selectedCountryId);
        console.log(selectedCityId);
        console.log(logTitle);
        console.log(startDate);
        
        
        if(travel_id) { // 수정인 경우
            putTravel(travel_id, selectedCityId, selectedCountryId, logTitle, startDate, endDate).then((res) => {
                console.log(res);
                
            })
            navigation.navigate("DetailTravelLog", {travel_id: travel_id});
        } else {
            postCreateTravel(4, selectedCityId, selectedCountryId, logTitle, startDate, endDate).then((res) => {
                console.log(res);
                setTravelId(res.travelId);
            });
            navigation.navigate("DetailTravelLog", {travel_id: travelId});
        }
    
    }

    // // 여행기 생성하면 여행기 상세화면으로 넘어간다 (travelId값을 넘겨줌)
    // useEffect(() => {
    //     navigation.navigate("DetailTravelLog", {travel_id: travelId});
    // }, [travelId]);

    return (
        <StartTravelLogBottomLayout>
            <SettingDateContainer>
                <SettingTitle>여행 기간</SettingTitle>
                <SelectDateContainer>
                    <SelectDate text={startDate} onDateChange={setStartDate}/>
                    <SelectDate text={endDate} onDateChange={setEndDate}/>
                </SelectDateContainer>
            </SettingDateContainer>
            <SettingTitleContainer>
                <SettingTitle>여행 제목</SettingTitle>
                <TitleInputText
                placeholder="| 여행 제목을 입력해주세요(15자 이내)"
                placeholderTextColor="#A7A7A7"
                value={logTitle}
                onChangeText={setLogTitle}
                />
            </SettingTitleContainer>
            <StandardButton
            text="여행 기록 시작하기"
            color="#FFF"
            width="100%"
            height="60px"
            borderRadius="5px"
            backgroundColor={isAllSelected ? "#6644FF" : "#D3D3D3"}
            onPress={handleCreateTravelLogBtn}
            />
        </StartTravelLogBottomLayout>
    )
}

const StartTravelLogBottomLayout = styled.View`
background-color: #F1F4FB;
width:100%;
flex:1;
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


