import styled from 'styled-components'
import StandardButton from '../../../shared/component/StandardButton';

export default function ButtonSection() {
  return (
    <MainLayout>

      <StandardButton text="E-mail로 시작하기" backgroundColor="#fff" color="#170D43" marginBottom="10px"/>

      <StandardButton text="카카오톡으로 시작하기" backgroundColor="#FAE100" color="#170D43"/>

      <StyledText>이미 계정이 있으신가요?</StyledText>
        
    </MainLayout>
  )
}

const MainLayout = styled.View`
height : 20%;
width : 100%;
align-items : center;
`;

const StyledText = styled.Text`
color: #FFF;
font-family: Pretendard;
font-size: 14px;
font-style: normal;
font-weight: 500;
line-height: normal;
text-decoration-line: underline;
margin-top : 28px;
`
