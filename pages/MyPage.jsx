import React,{useState} from 'react'
import styled from 'styled-components'
import NavigationBar from '../shared/component/NavigationBar'

import FollowerCount from '../entities/Mypage/FollowerCount'
import Background from '../entities/Mypage/BackgroundSection'
import ButtonSection from '../entities/Mypage/ButtonSection'
import Toggle from '../entities/Mypage/Toggle'
import Modal from '../entities/Mypage/Modal'

export default function MyPage() {
  const [isModal,setIsModal] = useState(false);
  return (
    <MainLayout>

      <Background />

      <FollowerCount />

      <Wrap>

        <Toggle />

        <ButtonSection setIsModal={setIsModal} />

      </Wrap>

      <NavigationBar mypage />

      {isModal && <Modal setIsModal={setIsModal}/> }

    </MainLayout>
  )
}

const MainLayout = styled.View`
height : 100%;
justify-content : space-between;
align-items: center;
`

const Wrap = styled.View`
height : 25%;
justify-content : space-around;
align-items : center;
margin-bottom : 10%;
`
