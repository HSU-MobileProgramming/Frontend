import React from 'react'
import styled from 'styled-components'
import StandardInput from '../../shared/component/StandardInput'
export default function InputSection() {
    return (
        <MainLayout>

            <StandardInput type="이름" placeholder="이름을 입력해주세요" />

            <StandardInput type="이메일" placeholder="사용할 이메일 주소를 입력해주세요" />

            <StandardInput type="비밀번호" placeholder="8~20자 이내 영문자, 숫자의 조합" />

            <StandardInput type="비밀번호 확인" placeholder="비밀번호를 다시 입력해주세요" />

        </MainLayout>
    )
}

const MainLayout = styled.View`
height : 50%;
justify-content : space-between;
`