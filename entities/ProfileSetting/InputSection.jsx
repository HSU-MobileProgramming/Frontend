import React from 'react';
import styled from 'styled-components/native';
import StandardInput from '../../shared/component/StandardInput';
import RNPickerSelect from 'react-native-picker-select';

export default function InputSection() {
    return (
        <MainLayout>
            <StandardInput type="닉네임" placeholder="사용할 닉네임을 입력해주세요" />

            <RNPickerSelect
                onValueChange={(value) => console.log(value)}
                items={[
                    { label: '남성', value: '남성' },
                    { label: '여성', value: '여성' }
                ]}
                placeholder={{ label: '성별 선택', value: null, color: '#9EA0A4' }}
            />

            <StandardInput type="국적" placeholder="대한민국" />
        </MainLayout>
    );
}

const MainLayout = styled.View`
  /* 스타일 지정 가능 */
`;
