import React,{useState} from 'react'
import styled from 'styled-components'
import { Animated, Easing, TouchableOpacity } from 'react-native'

export default function Toggle() {
    const [isToggled, setIsToggled] = useState(false)
    const [togglePosition] = useState(new Animated.Value(0))

    const toggleSwitch = () => {
        const toValue = isToggled ? 0 : 24

        Animated.timing(togglePosition, {
            toValue,
            duration: 200,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start()

        setIsToggled(!isToggled)
    }
    return (
        <MainLayout>

            <StyledText>내 지도 공개 여부</StyledText>

            <ToggleContainer onPress={toggleSwitch} isToggled={isToggled} activeOpacity={1}>
                <ToggleWheel style={{ transform: [{ translateX: togglePosition }] }} />
            </ToggleContainer>

        </MainLayout>
    )
}


const MainLayout = styled.View`
width: 348px;
height: 58px;
border-radius: 10px;
background: #FFF;
justify-content : center;
padding-left : 15px;
`

const StyledText = styled.Text`
color: #141414;
font-family: Pretendard;
font-size: 16px;
font-weight: 600;
letter-spacing: -0.3px;
`

const ToggleContainer = styled(TouchableOpacity)`
  width: 52px;
  height: 28px;
  background-color: ${({ isToggled }) => (isToggled ? '#5C95FB' : '#F1F1F5')};
  border-radius: 100px;
  margin-top : 10px;
  justify-content: center;
  padding: 2px;
  position : absolute;
  right : 5%;
  top : 5%;
  z-index : 1;
`

const ToggleWheel = styled(Animated.View)`
  width: 24px;
  height: 24px;
  background-color: #fff;
  border-radius: 100px;
`;

