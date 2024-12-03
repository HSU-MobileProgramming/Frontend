import React, { useState } from 'react'
import styled from 'styled-components'
import StandardInput from '../../shared/component/StandardInput'
import StandardButton from '../../shared/component/StandardButton'
import { useNavigation } from '@react-navigation/native'
import { login } from '../SignUp/api/userApi'
export default function InputSection() {
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()
  const onPressButton = () => {
    login(email,password);
    navigation.navigate("World")
  }
  return (
    <>
        <StandardInput type="로그인" placeholder="이메일을 입력해주세요" value={email} onChangeText={(value)=>setEmail(value)} isShow={true} marginBottom="10px"/>

        <StandardInput placeholder="비밀번호를 입력해주세요" value={password} onChangeText={(value)=>setPassword(value)} isShow={false} marginBottom=""/>

        <StandardButton text="로그인" marginTop="20px" onPress={()=>onPressButton()}/>
    </>
  )
}

