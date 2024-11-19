import React from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import NavigationBar from '../shared/component/NavigationBar'
import TitleBar from '../shared/component/TitleBar'
import StandardButton from '../shared/component/StandardButton'
import StandardInput from '../shared/component/StandardInput'
import CitySection from '../entities/Search/CitySection'
import { ScrollView } from 'react-native-gesture-handler'
export default function Search() {
  return (
    <MainLayout>
      <Wrap>

        <TitleBar text="탐색" backgroundColor="#fff" color="#5C95FB" />

        <StandardInput placeholder="도시 및 국가를 검색해보세요" width="348px" height="48px" opacity="1"/>

        <CitySection />

      </Wrap>

      <NavigationBar search />

    </MainLayout>

  )
}


const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
const MainLayout = styled.View`
height : 100%;
justify-content : space-between;
align-items : center;
`
const Wrap = styled.View`
align-items : center;
`