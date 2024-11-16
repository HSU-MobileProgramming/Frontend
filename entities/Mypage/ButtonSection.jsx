import React from 'react'
import styled from 'styled-components'
import StandardButton from '../../shared/component/StandardButton'
import { useNavigation } from '@react-navigation/native'
export default function ButtonSection({setIsModal}) {
  const Navigation = useNavigation()

  const onPressSecessionButton = () => {
    setIsModal(true);
  }
  return (
    <MainLayout>

        <StandardButton text="로그아웃" backgroundColor="#FD2D691A" color="#FD2D69" marginBottom="10px" onPress={()=>{Navigation.navigate("SignIn")}}/>

        <StandardButton text="회원 탈퇴" backgroundColor="#6060601A" color="#797979" onPress={()=>onPressSecessionButton()}/>

    </MainLayout>
  )
}

const MainLayout = styled.View`

`
