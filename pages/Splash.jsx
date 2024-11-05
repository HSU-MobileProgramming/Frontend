import {View, Text} from 'react-native';
import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

//컴포넌트
import Logo from '../entities/Splash/ui/Logo'
import Line from '../entities/Splash/ui/Line';
import ButtonSection from '../entities/Splash/ui/ButtonSection';

export default function Splash() {
  return (
    <MainLayout colors={['#498FFF', '#BAB4E2','#FFD7C7']} locations={[0,0.6,1]}> 
      
      <Logo/>
      <ButtonSection/>
      
    </MainLayout>
  )
}

const MainLayout = styled(LinearGradient)`
height : 100%;
background-color : #fff;
justify-content : space-around;
`;