import styled from 'styled-components'
import LOGO from '../../../assets/logo.png'
import PUZZLE from '../../../assets/puzzle.png'
import PUZZLE2 from '../../../assets/puzzle2.png'
export default function Logo() {
    return (
        <MainLayout>
            <BackImg source={PUZZLE}/>
            <PuzzleImg source={PUZZLE2}/>
            <StyledImg source={LOGO}></StyledImg>
            <StyledText>환영합니다 :)</StyledText>
            <StyledText fontWeight="400" fontSize="12px" marginTop="10px">특별한 방식으로 당신의 여행을 기억하세요!</StyledText>
        </MainLayout>
    )
}

const MainLayout = styled.View`
height : 80%;
width : 100%;
justify-content : center;
align-items : center;
`;

const StyledText = styled.Text`
color : #fff;
font-weight : ${({ fontWeight }) => fontWeight || '600'};
font-size :  ${({ fontSize }) => fontSize || '20px'};
margin-top :  ${({ marginTop }) => marginTop || '0'};
`;

const StyledImg = styled.Image`
width : 180px;
height : 180px;
`;


const BackImg = styled.Image`
width : 200px;
height : 300px;
position : absolute;
top : 0;
right : 0;
`;

const PuzzleImg = styled.Image`
width : 150px;
height : 200px;
position : absolute;
bottom : 0;
left : 0;
`;
