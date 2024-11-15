import React from 'react'
import {View} from 'react-native'
import styled from 'styled-components'
import NavigationBar from '../shared/component/NavigationBar'
export default function Search() {
  return (
    <MainLayout>
        <View/>
      <NavigationBar search/> 
    </MainLayout>
  )
}


const MainLayout = styled.View`
height : 100%;
justify-content : space-between;
`