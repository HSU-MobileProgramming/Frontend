import React from 'react'
import styled from 'styled-components'

//이미지
import fukuoka from '../../assets/fukuoka.png'
import tokyo from '../../assets/tokyo.png'
import danang from '../../assets/danang.png'
import paris from '../../assets/paris.jpg'
import seoul from '../../assets/seoul.jpg'
import newyork from '../../assets/newyork.jpg'
import bangkok from '../../assets/bangkok.jpg'
import berlin from '../../assets/berlin.jpg'
import sydney from '../../assets/sydney.jpg'
import volley from '../../assets/volley.jpg'

export default function CitySection() {
    const city = [
        {
            image: fukuoka,
            name: "후쿠오카, 일본",
            des: "1,084명이 여행했어요",
        },
        {
            image: danang,
            name: "다낭, 베트남",
            des: "987명이 여행했어요",
        },
        {
            image: tokyo,
            name: "도쿄, 일본",
            des: "2,453명이 여행했어요",
        },
        {
            image: paris,
            name: "파리, 프랑스",
            des: "3,257명이 여행했어요",
        },
        {
            image: seoul,
            name: "서울, 대한민국",
            des: "5,876명이 여행했어요",
        },
        {
            image: newyork,
            name: "뉴욕, 미국",
            des: "4,193명이 여행했어요",
        },
        {
            image: bangkok,
            name: "방콕, 태국",
            des: "2,754명이 여행했어요",
        },
        {
            image: berlin,
            name: "베를린, 독일",
            des: "2,639명이 여행했어요",
        },
        {
            image: sydney,
            name: "시드니, 호주",
            des: "1,834명이 여행했어요",
        },
        {
            image: volley,
            name: "발리, 인도네시아",
            des: "3,029명이 여행했어요",
        }
    ];
    
    return (
        <MainLayout>
            <StyledText color="3A3A3A" fontSize="20px" fontWeight="700"> 요즘 떠오르는 도시 </StyledText>
            <StyledText> 여행 조각들이 많이 기록되는 도시들이에요 </StyledText>
            <CityList>
            {
                city.map((item, index) => (
                    <WrapCity>
                        <City source={item.image} />
                        <CityText>{item.name}</CityText>
                        <DesText> {item.des}</DesText>
                    </WrapCity>
                ))
            }
            </CityList>

        </MainLayout>
    )
}

const MainLayout = styled.View`
width : 100%;
padding : 0 16px 0 16px;
`

const StyledText = styled.Text`
color: ${({ color }) => color || '#777'};
font-size: ${({ fontSize }) => fontSize || '14px'};
font-weight: ${({ fontWeight }) => fontWeight || '500'};;
justify-content:center;
alien-items:center;
margin-top: ${({ marginTop }) => marginTop || '0px'};
`;

const CityList = styled.View`
flex-direction : row;
flex-wrap: wrap;
justify-content : space-between;
margin-top : 20px;
`
const WrapCity = styled.View`
flex-direction : column;
`
const CityText = styled.Text`
color: #FFF;
font-family: Pretendard;
font-size: 16px;
font-weight: 700;
letter-spacing: -0.3px;
position : absolute;
bottom : 20%;
left : 8%;
`

const DesText = styled.Text`
color: #EAEAEA;
font-family: Pretendard;
font-size: 13px;
font-weight: 500;
letter-spacing: -0.3px;
position : absolute;
bottom : 10%;
left : 5%;
`
const City = styled.Image`
width: 164px;
height: 166px;
border-radius: 10px;
margin-bottom : 11px;
`