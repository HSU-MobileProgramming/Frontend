import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputSection from '../entities/ProfileSetting/InputSection';
import TopBar from '../shared/component/TopBar';
import ProfileSelect from '../entities/ProfileSetting/ProfileSelect';
import StandardButton from '../shared/component/StandardButton';

import profile from '../assets/profile.png'; // 기본 이미지

import { useNavigation } from '@react-navigation/native';
import { signUp } from '../entities/SignUp/api/userApi';

export default function ProfileSetting({ route }) {
  const { name, email, password, gpsConsent, isPublic } = route.params;

  const [nickname, setNickname] = useState('');
  const [country, setCountry] = useState('');
  const [gender,setGender] = useState('MALE')
  const [profileImg, setProfileImg] = useState(profile);

  const navigation = useNavigation();

  // useEffect(() => {
  //   console.log({ name, email, password, gpsConsent, isPublic, nickname, country, profileImg });
  // }, [name, email, password, gpsConsent, isPublic, nickname, country, profileImg]);

  const onPressButton = async () => {
    try {
      // FormData 생성
      const formData = new FormData();
      formData.append('name', name);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('nickname', nickname);
      formData.append('gender', gender);
      formData.append('gpsConsent', gpsConsent ? 'true' : 'false');
      formData.append('isPublic', isPublic ? 'true' : 'false');
      formData.append('country', country);
      formData.append('profile_img',profileImg);

      // API 호출
      const response = await signUp(formData);

      console.log('Sign-up successful:', response);
      navigation.navigate('SignIn');
    } catch (error) {
      console.error('Sign-up failed:', error);
      alert('회원가입에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <MainLayout>
      <TopBar text="PROFILE" />
      <ProfileSelect profileImg={profileImg} setProfileImg={setProfileImg} />
      <InputSection nickname={nickname} setNickname={setNickname} country={country} setCountry={setCountry} />
      <StandardButton text="시작하기" onPress={onPressButton} />
    </MainLayout>
  );
}

const MainLayout = styled.View`
  padding: 0 21px 0 21px;
  background: #f8f8f8;
  height: 100%;
`;
