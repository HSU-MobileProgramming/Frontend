import React from 'react'
import styled from 'styled-components'
import CheckBox from './CheckBox'

export default function CheckBoxSection() {
  return (
    <MainLayout>

        <CheckBox text="이용약관 (필수)"/>

        <CheckBox text="개인정보 수집 및 이용 (필수)"/>

        <Line/>

        <CheckBox text="전체동의"/>
      
    </MainLayout>
  )
}

const MainLayout = styled.View`
margin-top : 41px;
height : 12%;
justify-content : space-between;
margin-bottom : 70px;
`

const Line = styled.View`
border : 1px solid #EAEAEA;
margin-bottom :
`