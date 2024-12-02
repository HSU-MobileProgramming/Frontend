import React, { useState } from 'react'
import { View } from 'react-native'
import styled from 'styled-components'
import NavigationBar from '../shared/component/NavigationBar'
import TitleBar from '../shared/component/TitleBar'
import StandardButton from '../shared/component/StandardButton'
import StandardInput from '../shared/component/StandardInput'
import CitySection from '../entities/Search/CitySection'
import { ScrollView } from 'react-native-gesture-handler'
import ResultSection from '../entities/Search/ResultSection'
import Select from '../entities/Search/Select'
export default function Search() {
  const [isShowResult, setIsShowResult] = useState(false);
  const [currentSection, setIsCurrentSection] = useState("✨ 요즘 떠오르는 도시 ✨");
  return (
    <MainLayout>
      <TitleBar text="탐색" backgroundColor="#fff" color="#5C95FB" />

      <Select currentSection={currentSection} setIsCurrentSection={setIsCurrentSection} />

      {
        currentSection === "✨ 요즘 떠오르는 도시 ✨" ?

          <ScrollContainer>
            {
              isShowResult ?
                <ResultSection /> :
                <CitySection />
            }
          </ScrollContainer> :
          <ScrollContainer>
            <ResultSection />
          </ScrollContainer>

      }



      <NavigationBar search />
    </MainLayout>

  )
}


const ScrollContainer = styled.ScrollView`
  flex: 1;
  width: 100%;
`;
const MainLayout = styled.View`
flex : 1;
height : 100%;
justify-content : space-between;
align-items : center;
`