import styled from "styled-components"
import { Text } from "react-native"
import TopBar from "../shared/component/TopBar"
export default function SignIn() {
  return (
    <MainLayout>
      <TopBar text="Log In"/>
    </MainLayout>
  )
}

const MainLayout = styled.View`

`
