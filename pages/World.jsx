import { View, Text } from 'react-native';
import NavigationBar from '../shared/component/NavigationBar';
import styled from 'styled-components';
import TitleBar from '../shared/component/TitleBar';
import MapSection from '../entities/World/MapSection';
export default function World() {
  return (
    <MainLayout>
      <TitleBar text="여행자님의 세계지도" />

      <MapSection/>

      <NavigationBar world />
    </MainLayout>
  )
}


const MainLayout = styled.View`
height : 100%;
justify-content : space-between;
`