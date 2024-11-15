import React from 'react'
import styled from 'styled-components'
import StandardInput from '../../shared/component/StandardInput'
import StandardButton from '../../shared/component/StandardButton'
import { useNavigation } from '@react-navigation/native'
export default function InputSection() {
  const navigation = useNavigation()
  const onPressButton = () => {
    navigation.navigate("World")
  }
  return (
    <>
        <StandardInput type="로그인" placeholder="이메일을 입력해주세요" isShow={true} marginBottom="10px"/>

        <StandardInput placeholder="비밀번호를 입력해주세요" isShow={false} marginBottom=""/>

        <StandardButton text="로그인" onPress={()=>onPressButton()}/>
    </>
  )
}

