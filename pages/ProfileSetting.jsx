import React from 'react'
import {Image} from 'react-native'
import styled from 'styled-components'
import InputSection from '../entities/ProfileSetting/InputSection'
import TopBar from '../shared/component/TopBar'
import ProfileSelect from '../entities/ProfileSetting/ProfileSelect'
import StandardButton from '../shared/component/StandardButton'

import { useNavigation } from '@react-navigation/native'
export default function ProfileSetting() {

  const navigation = useNavigation();

  const onPressButton = () => {
    navigation.navigate("SignIn")
  }

  return (
    <MainLayout>

        <TopBar text="PROFILE"/>

        <ProfileSelect/>

        <InputSection/>

        <StandardButton text="시작하기" onPress={onPressButton}/>
      
    </MainLayout>
  )
}


const MainLayout = styled.View`
padding : 0 21px 0 21px;
background: #F8F8F8;
height : 100%;
`

