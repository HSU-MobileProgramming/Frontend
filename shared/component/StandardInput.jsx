import React, { useState } from 'react'
import styled from 'styled-components'

export default function StandardInput({type, placeholder,isShow,marginBottom}) {
    const [isFocus, setIsFocus] = useState(false);
  return (
    <MainLayout marginBottom={marginBottom}>
      { isShow && <Title>{type}</Title> }
        <StyledInput 
            placeholder={isFocus ? "" : placeholder}
            onFocus={()=>setIsFocus(true)}
            onBlur={()=>setIsFocus(false)}
        />
    </MainLayout>
  )
}

const MainLayout = styled.View`
height : 79px;
justify-content : space-between;
margin-bottom : ${({ marginBottom }) => marginBottom || '0px'};
`
const Title = styled.Text`
color: #1F1F1F;
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 600;
line-height: normal;
`
const StyledInput = styled.TextInput`
padding-left : 11px;
border-radius: 5px;
height: 50px;
background: #FFF;
border : 1px solid ${({ borderColor }) => borderColor || '#fff'};
`