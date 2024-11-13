import React from 'react'
import styled from 'styled-components'

import profile from '../../assets/profile.png'

export default function ProfileSelect() {
  return (
    <MainLayout>

        <StyledImage source={profile}/>
      
    </MainLayout>
  )
}


const MainLayout = styled.View``

const StyledImage = styled.Image`
width: 198.649px;
height: 198.649px;
`