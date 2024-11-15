import {View, Text} from 'react-native';
import NavigationBar from '../shared/component/NavigationBar';
import styled from 'styled-components';
export default function World() {
  return (
    <MainLayout>
        <Text>
            월드
        </Text>

        <NavigationBar world/>
    </MainLayout>
  )
}


const MainLayout = styled.View`
height : 100%;
justify-content : space-between;
`