import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

//이미지
import PinkPuzzle from '../../assets/puzzle-pink.svg';
import YellowPuzzle from '../../assets/puzzle-yellow.svg';
import MintPuzzle from '../../assets/puzzle-mint.svg';
import SkyBluePuzzle from '../../assets/puzzle-skyblue.svg';
import DisneyLand from '../../assets/disneyLand.jpg'
import UniversalStudio from '../../assets/universalStudios.jpg'
export default function Ticket({ place, city, ticket_date, length, marginLeft,index }) {
    const [image, setImage] = useState();
    const [backgroundColor, setBackgroundColor] = useState();
    const [cityName, setCityName] = useState();
    useEffect(() => {
        switch (true) {
            case ["디즈니랜드", "디즈니 랜드"].includes(place):
                setImage(DisneyLand);
                setCityName("Tokyo");
                break;
            case ["유니버셜 스튜디오", "유니버셜스튜디오"].includes(place):
                setImage(UniversalStudio);
                setCityName("Osaka");
                break;
            default:
                setImage(null); // 기본값 설정
                break;
        }

        switch(index%4) {
            case 0 : setBackgroundColor("#739EF6");  break;
            case 1 : setBackgroundColor("#FFDD92");  break;
            case 2 : setBackgroundColor("#9BE4DE");  break;
            case 3 : setBackgroundColor("#FAAEC4");  break;
            default : break;

        }
    }, [city]);

    const Puzzle = () => {
        switch(index%4) {
            case 0 : return <SkyBluePuzzle/>;
            case 1 : return <YellowPuzzle width={16} height={16}/>;
            case 2 : return <MintPuzzle/>;
            case 3 : return <PinkPuzzle/>;
            default : break;

        }
    }
    return (
        <Container marginLeft={marginLeft}>

            <TopCard backgroundColor={backgroundColor}>

                <WrapRound>

                    <Round padding="4px 14px 4px 14px">
                        <StyledText fontSize="18px" color={backgroundColor} lineHeight="20px" letterSpacing="-0.35px" fontWeight="700">
                            {cityName}
                        </StyledText>
                    </Round>

                    <Round width="28px" height="28px">
                        <Puzzle/>
                    </Round>

                </WrapRound>

                <Img source={image} width="200px" height="200px" marginBottom="15%" />

            </TopCard>

            <BottomCard backgroundColor={backgroundColor}>

                <StyledText fontSize="32px" fontWeight="600" lineHeight="44px" letterSpacing="-0.9px" color="#F7F7FB" marginBottom="12px">
                    {place}
                </StyledText>

                <WrapEmail>
                    <StyledText fontWeight="600">Date</StyledText>
                </WrapEmail>

                <StyledText>{ticket_date}</StyledText>


            </BottomCard>

        </Container>
    )
}


const Container = styled.View`
margin-right : 32px;
margin-left :  ${({ marginLeft }) => marginLeft || '0px'};
`;

const StyledText = styled.Text`
color: ${({ color }) => color || '#fff'};
font-family: Pretendard;
font-size: ${({ fontSize }) => fontSize || '12px'};
font-style: normal;
font-weight: ${({ fontWeight }) => fontWeight || '400'};
line-height: ${({ lineHeight }) => lineHeight || '18px'};
letter-spacing: ${({ letterSpacing }) => letterSpacing || '0px'};
margin-bottom :  ${({ marginBottom }) => marginBottom || '0px'};
`;

const TopCard = styled.View`
width : 280px;
height : 324px;
background-color : ${({ backgroundColor }) => backgroundColor || '#5C95FB'};
border-radius : 24px;
align-items : center;
justify-content : space-between;
`;
const WrapRound = styled.View`
width : 80%;
margin-top : 24px;
flex-direction : row;
justify-content : space-between;
align-items : center;
`;
const Round = styled.View`
width : ${({ width }) => width || '98px'};
height : ${({ height }) => height || '28px'};
background-color : #F7F7FB;
border-radius : 100px;
padding : ${({ padding }) => padding || '6px'};
justify-content : center;
align-items : center;
`;

const Img = styled.Image`
width : ${({ width }) => width || '16px'};
height : ${({ height }) => height || '16px'};
position : ${({ position }) => position || 'none'};
right : 0;
bottom : 0;
margin-bottom : ${({ marginBottom }) => marginBottom || '0'};
margin-right : ${({ marginRight }) => marginRight || '0'};
border-radius: 200px;
`;

const BottomCard = styled.View`
width : 280px;
height : 140px;
background-color : ${({ backgroundColor }) => backgroundColor || '#5C95FB'};
border-radius : 24px;
border-top-width: 1px;
border-top-color: #FFFFFF80;
padding-left : 24px;
padding-top : 23px;
`;

const WrapEmail = styled.View`
flex-direction : row;
align-items : center;
`;
