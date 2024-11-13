import React from 'react'
import {Image} from 'react-native'
import styled from 'styled-components'
import InputSection from '../entities/ProfileSetting/InputSection'
import TopBar from '../shared/component/TopBar'
import ProfileSelect from '../entities/ProfileSetting/ProfileSelect'
export default function ProfileSetting() {
  return (
    <MainLayout>

        <TopBar text="PROFILE"/>

        <ProfileSelect/>

        <InputSection/>
      
    </MainLayout>
  )
}


const MainLayout = styled.View`
padding : 0 21px 0 21px;
background: #F8F8F8;
height : 100%;
`

