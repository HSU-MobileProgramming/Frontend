import styled from "styled-components"
import { Text } from "react-native"
import { useState } from "react"

export default function SelectBox() {
    const [currentGender, setCurrentGender] = useState("남성");
    const gender = ["남성", "여성"];
    return (
        <MainLayout>
            <StyledText>성별</StyledText>

            <Wrap>

                {gender.map((g, i) => (
                    <SelectSection key={i} onPress={() => setCurrentGender(g)} isSelected={currentGender === g}>
                        <SelectText isSelected={currentGender === g}>
                            {g}
                        </SelectText>
                    </SelectSection>
                ))}
            </Wrap>
        </MainLayout>

    )
}

const MainLayout = styled.View`

`

const Wrap = styled.View`
width: 136px;
height: 50px;
flex-direction: row;
border-radius: 5px;
background: #F4F4F4;
margin-top: 10px;
`;

const StyledText = styled.Text`
color: ${({ isSelected }) => (isSelected ? '#5C95FB' : '#1F1F1F')}; 
font-family: Pretendard;
font-size: 16px;
font-weight: 600;
margin-top: 20px;
`;

const SelectSection = styled.TouchableOpacity`
width: 66px;
height: 50px;
justify-content: center;
align-items: center;
background-color: ${({ isSelected }) => (isSelected ? '#FFF' : '#F4F4F4')}; 
border: ${({ isSelected }) => (isSelected ? '2.144px solid #5C95FB;' : 'none')}; 
border-radius: 5px;
`;

const SelectText = styled.Text`
color: ${({ isSelected }) => (isSelected ? '#5C95FB' : '#1F1F1F')}; 
font-size: 15px;
font-weight: 600;
`;