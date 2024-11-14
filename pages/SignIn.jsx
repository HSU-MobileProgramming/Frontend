import styled from "styled-components"
import { Text } from "react-native"
import TopBar from "../shared/component/TopBar"
import TextSection from "../entities/SignIn/TextSection"
import InputSection from "../entities/SignIn/InputSection"
export default function SignIn() {
  return (
    <MainLayout>
      <TopBar text="Log In"/>

      <TextSection/>

      <InputSection/>
      
    </MainLayout>
  )
}

const MainLayout = styled.View`
height : 100%;
padding : 0 21px 0 21px;
`
