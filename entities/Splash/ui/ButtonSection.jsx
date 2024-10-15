import styled from 'styled-components'
import StandardButton from '../../../shared/component/StandardButton';

export default function ButtonSection() {
  return (
    <MainLayout>

      <StandardButton text="가입하기"/>

      <StandardButton text="카카오로그인"/>
        
    </MainLayout>
  )
}

const MainLayout = styled.View`
height : 14%;
width : 100%;
justify-content : space-between;
align-items : center;
`;
