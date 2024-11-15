import React from 'react'
import {View} from 'react-native'
import styled from 'styled-components'
import NavigationBar from '../shared/component/NavigationBar'
export default function MyPage() {
  return (
    <MainLayout>

        <View/>
        

        <NavigationBar mypage/>
      
    </MainLayout>
  )
}

const MainLayout = styled.View`
height : 100%;
justify-content : space-between;
`
