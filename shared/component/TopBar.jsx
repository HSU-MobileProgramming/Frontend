import React from 'react'
import styled from 'styled-components'

export default function TopBar({text}) {
  return (
    <MainLayout>
      <StyledText>{text}</StyledText>
    </MainLayout>
  )
}

const MainLayout = styled.View`
height : 15%;
justify-content : center;
align-items : center;
`
const StyledText = styled.Text`
color: #5C95FB;
font-family: Pretendard;
font-size: 20px;
font-weight: 600;
`