import React, { useState } from 'react'
import styled from 'styled-components'

import glasses from '../../assets/glasses.png'

export default function StandardInput({type, placeholder,isShow,marginBottom,height,width,opacity,onSubmitEditing,returnKeyType,onChangeText,value,zIndex,marginTop}) {
    const [isFocus, setIsFocus] = useState(false);
  return (
    <MainLayout marginBottom={marginBottom} zIndex={zIndex} marginTop={marginTop}>
      { isShow && <Title>{type}</Title> }
        <StyledInput 
            placeholder={isFocus ? "" : placeholder}
            onFocus={()=>setIsFocus(true)}
            onBlur={()=>setIsFocus(false)}
            height={height}
            width={width}
            isFocus={isFocus}
            onSubmitEditing={onSubmitEditing}
            returnKeyType={returnKeyType}
            onChangeText={onChangeText}
            value={value}
        />
        <GlassesImg source={glasses} opacity={opacity}/>
    </MainLayout>
  )
}

const MainLayout = styled.View`
justify-content : space-between;
margin-bottom : ${({ marginBottom }) => marginBottom || '0px'};
margin-top : ${({ marginTop }) => marginTop || '0px'};
z-index : ${({ zIndex }) => zIndex || '0'};
`
const Title = styled.Text`
color: #1F1F1F;
font-size: 16px;
font-weight: 600;
margin-bottom : 10px;
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