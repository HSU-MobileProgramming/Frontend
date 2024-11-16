import React from 'react'
import styled from 'styled-components'
import StandardButton from '../../shared/component/StandardButton'
export default function ButtonSection({setIsModal}) {

  const onPressSecessionButton = () => {
    setIsModal(true);
  }
  return (
    <MainLayout>

        <StandardButton text="로그아웃" backgroundColor="#FD2D691A" color="#FD2D69" marginBottom="10px"/>

        <StandardButton text="회원 탈퇴" backgroundColor="#6060601A" color="#797979" onPress={()=>onPressSecessionButton()}/>

    </MainLayout>
  )
}

const MainLayout = styled.View`

`
