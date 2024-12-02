import React, { useState } from 'react';
import styled from 'styled-components';
import StandardInput from '../../shared/component/StandardInput';

export default function InputSection({ formData }) {
    const [name, setName] = useState(formData.name);
    const [email, setEmail] = useState(formData.email);
    const [password, setPassword] = useState(formData.name);
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordError, setPasswordError] = useState(false); // 비밀번호 확인 오류 상태

    // 비밀번호 확인 핸들러
    const handlePasswordConfirm = (value) => {
        setPasswordConfirm(value);
        setPasswordError(password !== value); // 비밀번호 일치 여부 확인
    };

    return (
        <MainLayout>
            <StandardInput
                type="이름"
                placeholder="이름을 입력해주세요"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isShow={true}
            />

            <StandardInput
                type="이메일"
                placeholder="사용할 이메일 주소를 입력해주세요"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                isShow={true}
            />

            <StandardInput
                type="비밀번호"
                placeholder="8~20자 이내 영문자, 숫자의 조합"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isShow={true}
            />

            <StandardInput
                type="비밀번호 확인"
                placeholder="비밀번호를 다시 입력해주세요"
                value={passwordConfirm}
                onChange={(e) => handlePasswordConfirm(e.target.value)}
                isShow={true}
            />

            {/* 비밀번호 확인 오류 메시지 */}
            {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>}
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
