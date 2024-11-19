import React, { useState } from 'react'
import styled from 'styled-components'

import glasses from '../../assets/glasses.png'

export default function StandardInput({type, placeholder,isShow,marginBottom,height,width,opacity}) {
    const [isFocus, setIsFocus] = useState(false);
  return (
    <MainLayout marginBottom={marginBottom}>
      { isShow && <Title>{type}</Title> }
        <StyledInput 
            placeholder={isFocus ? "" : placeholder}
            onFocus={()=>setIsFocus(true)}
            onBlur={()=>setIsFocus(false)}
            height={height}
            width={width}
            isFocus={isFocus}
        />
        <GlassesImg source={glasses} opacity={opacity}/>
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
font-size: 16px;
font-weight: 600;
`
const StyledInput = styled.TextInput`
padding-left : 11px;
border-radius: 5px;
height : ${({ height }) => height || '50px'};
width : ${({ width }) => width || '100%'};
background: #FFF;
border : 1px solid ${({ isFocus }) => isFocus ? "#5C95FB" : '#fff'|| '#fff'};
`

const GlassesImg = styled.Image`
opacity : ${({ opacity }) => opacity || '0'};
width: 18px;
height: 18px;
position : absolute;
right : 3%;
top : 20%;
`