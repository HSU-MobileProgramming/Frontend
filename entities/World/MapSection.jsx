import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Svg } from 'react-native-svg';
import { Dimensions } from 'react-native';
import SvgIcon from './SvgIcon';
import { getMapColor } from './api/worldApi';

const { width, height } = Dimensions.get('window'); // 화면 크기 가져오기

export default function MapSection({colors,countryIds}) {

  return (
    <MainLayout horizontal>
      <SvgWrapper>
        <Svg
          width={width} // 화면 너비에 맞춤
          height={height} // 화면 높이에 맞춤
          viewBox="350 0 250 490" // SVG의 원본 좌표계
        >
          <SvgIcon dynamicColors={colors} dynamicCountryIds={countryIds} />
        </Svg>
      </SvgWrapper>
    </MainLayout>
  );
}

const MainLayout = styled.ScrollView`
  height: 100%;
  position: absolute;
  top: 70;
  z-index: -10;
`;

const SvgWrapper = styled.View`
  justify-content: center;
  align-items: center;
`;
