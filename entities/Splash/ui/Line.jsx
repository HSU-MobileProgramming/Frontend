import styled from "styled-components"

//이미지
import whitepuzzle from '../../../assets/whitepuzzle.png'
import yellowpuzzle from '../../../assets/yellowpuzzle.png'
import mintpuzzle from '../../../assets/mintpuzzle.png'
import pinkpuzzle from '../../../assets/pinkpuzzle.png'

export default function Line() {
  return (
    <MainLayout>
        <StyledLine marginRight="20px"/>
        <StyledImage source={whitepuzzle}/>
        <StyledImage source={yellowpuzzle}/>
        <StyledImage source={mintpuzzle}/>
        <StyledImage source={pinkpuzzle}/>
        <StyledLine marginLeft="20px"/>
    </MainLayout>
  )
}


const MainLayout = styled.View`
flex-direction : row;
align-items : center;
`;

const StyledLine = styled.View`
height : 1px;
width : 90px;
border : 1px solid #ffffff33;
border-radius : 50px;
margin-right : ${({ marginRight }) => marginRight || '0'};
margin-left : ${({ marginLeft }) => marginLeft || '0'};
`;

const StyledImage = styled.Image`
width : 35px;
height : 35px;
`;