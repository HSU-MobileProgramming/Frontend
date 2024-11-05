import styled from "styled-components"

export default function StandardButton({ text, marginBottom,marginTop,onPress, backgroundColor, width, height , borderRadius, color, fontSize}) {
    return (
      <StyledButton 
        marginBottom={marginBottom} 
        marginTop={marginTop}
        backgroundColor={backgroundColor}
        width={width}
        height={height}
        borderRadius={borderRadius}
        onPress={onPress}
        >
  
        {/* 버튼에 들어갈 텍스트 */}
        <ButtonText color={color} fontSize={fontSize}>{text}</ButtonText>
  
      </StyledButton>
    );
  }
  
  const StyledButton = styled.TouchableOpacity`
    background-color: ${({ backgroundColor }) => backgroundColor || '#5C95FB'};
    width: ${({ width }) => width || '320px'};
    height: ${({ height }) => height || '52px'};
    padding: 16px 14px;
    border-radius: ${({ borderRadius }) => borderRadius || '12px'};
    align-items: center;
    margin-top: ${({ marginTop }) => marginTop || '0px'};
    margin-bottom: ${({ marginBottom }) => marginBottom || '0px'};
  `;
  
  const ButtonText = styled.Text`
    color: ${({ color }) => color || '#fff'};
    font-size: ${({fontSize}) => fontSize || '16px'};
    font-weight: 600;
    justify-content:center;
    alien-items:center;
    margin-top: ${({marginTop}) => marginTop || '0px'};
  `;
  
