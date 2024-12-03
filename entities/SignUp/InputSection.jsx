import React, { useState } from 'react';
import styled from 'styled-components';
import StandardInput from '../../shared/component/StandardInput';

export default function InputSection({ name,setName,email, setEmail,password, setPassword }) {
    const [passwordConfirm, setPasswordConfirm] = useState('');

    // 비밀번호 확인 핸들러
    const handlePasswordConfirm = (value) => {
        setPasswordConfirm(value);
        // setPasswordError(password !== value); // 비밀번호 일치 여부 확인
    };

    return (
        <MainLayout>
            <StandardInput
                type="이름"
                placeholder="이름을 입력해주세요"
                value={name}
                onChangeText={(value) => setName(value)}
                isShow={true}
            />

            <StandardInput
                type="이메일"
                placeholder="사용할 이메일 주소를 입력해주세요"
                value={email}
                onChangeText={(value) => setEmail(value)}
                isShow={true}
            />

            <StandardInput
                type="비밀번호"
                placeholder="8~20자 이내 영문자, 숫자의 조합"
                value={password}
                onChangeText={(value) => setPassword(value)}
                isShow={true}
            />

            <StandardInput
                type="비밀번호 확인"
                placeholder="비밀번호를 다시 입력해주세요"
                value={password}
                onChangeText={(value) => handlePasswordConfirm(value)}
                isShow={true}
            />

            {/* 비밀번호 확인 오류 메시지 */}
            {/* {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>} */}
        </MainLayout>
    );
}

const MainLayout = styled.View`
    height: 50%;
    justify-content: space-between;
`;

const ErrorMessage = styled.Text`
    color: red;
    font-size: 0.875rem;
    margin-top: 0.5rem;
`;
