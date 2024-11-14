import React, { useState } from 'react'
import { Image, TouchableOpacity } from 'react-native'
import styled from 'styled-components'

//이미지
import noneCheck from '../../assets/checkbox.png'
import onCheck from '../../assets/onCheck.png'
export default function CheckBox({ text }) {
    const [isPress, setIsPress] = useState(false)

    const onPressCheckBox = () => {
        isPress ? setIsPress(false) : setIsPress(true)
    }

    return (
        <MainLayout>

            <TouchableOpacity  onPress={onPressCheckBox}>
                <StyledImg source={isPress ? noneCheck : onCheck} />
            </TouchableOpacity>

            <StyledText>{text}</StyledText>
            
        </MainLayout>
    )
}

const MainLayout = styled.View`
flex-direction : row;
`
const StyledImg = styled.Image`
width: 20px;
height: 20px;
margin-right : 10px;
`

const StyledText = styled.Text`
color: #141414;
font-family: Pretendard;
font-size: 15px;
font-style: normal;
font-weight: 500;
line-height: normal;
`