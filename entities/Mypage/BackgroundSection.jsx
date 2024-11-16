import React from 'react'
import styled from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import profileImage from '../../assets/profileImg.png'
import pen from '../../assets/pen.png'
export default function BackgroundSection() {
    const navigation = useNavigation()
    const onPressImage = () => {
        navigation.navigate("ProfileSetting")
    }
    return (
        <Background>
            <SyledText>MY PAGE</SyledText>

            <WrapImage onPress={()=>onPressImage()}>
                <StyledImg source={profileImage} />
                {/* <ModifyButton source={pen} /> */}
            </WrapImage>

        </Background>

    )
}

const Background = styled.View`
width : 100%;
height : 30%;
border-radius: 0px 0px 20% 20%;
background-color : #5C95FB;
justify-content : space-between;
align-items : center;
padding-top : 20%;
margin-bottom : 10%;
`
const StyledImg = styled.Image`
width: 150px;
height: 150px;
border-radius: 100px;
margin-top : 15%;
`

const SyledText = styled.Text`
color: #FFF;
font-family: Pretendard;
font-size: 20px;
font-weight: 700;
`

const WrapImage = styled.TouchableOpacity`


`
const ModifyButton = styled.TouchableOpacity`
width: 28px;
height: 28px;

`