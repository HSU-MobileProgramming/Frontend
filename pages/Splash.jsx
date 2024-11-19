import {View, Text} from 'react-native';
import styled from "styled-components/native";
// import { LinearGradient } from 'expo-linear-gradient';

//컴포넌트
import Logo from '../entities/Splash/ui/Logo'
import Line from '../entities/Splash/ui/Line';
import ButtonSection from '../entities/Splash/ui/ButtonSection';

export default function Splash() {
  return (
    <MainLayout> 
      
      <Logo/>
      <ButtonSection/>
      
    </MainLayout>
  )
}

const MainLayout = styled.View`
height : 100%;
background-color : #5C95FB;
justify-content : space-around;

`;