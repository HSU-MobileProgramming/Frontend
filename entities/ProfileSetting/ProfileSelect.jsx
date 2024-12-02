import React, { useState } from 'react';
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';

import profile from '../../assets/profile.png' // 기본 이미지
import MyProfile from '../../assets/profileImg.png'; // 변경 후 이미지

export default function ProfileSelect({profileImg, setProfileImg}) {

    // 이미지 변경 함수
    const toggleProfileImage = () => {
      setProfileImg((prevImage) => (prevImage === profile ? MyProfile : profile));
    };

    return (
        <MainLayout>
            <TouchableOpacity onPress={toggleProfileImage}>
                <StyledImage source={profileImg} />
            </TouchableOpacity>
        </MainLayout>
    );
}

const MainLayout = styled.View`
    align-items: center;
    margin-bottom: 50px;
`;

const StyledImage = styled.Image`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    background-color: #f0f0f0;
`;
