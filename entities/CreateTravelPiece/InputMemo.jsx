import styled from "styled-components/native";
import { View, Text, TextInput } from "react-native";

export default function InputMemo({height, placeholder, setMemo}) {
    const handleTextChange = (text) => {
        if (setMemo) {
            setMemo(text); // 상위 컴포넌트로 메모 내용 전달
        }
    };
    return (
        <MainLayout>
            <MemoText>메모</MemoText>
            <MemoTextInput
            multiline={true} // textarea 기능 활성화
            numberOfLines={4} 
            placeholder={placeholder || '| 사진에 대해 설명해주세요! (30자 이내)'}
            height={height}
            onChangeText={handleTextChange}
            />
        </MainLayout>
    )
}

const MainLayout = styled.View`

`;

const MemoText = styled.Text`
color: #1F1F1F;
font-size: 16px;
font-weight: 600;
`;

const MemoTextInput = styled.TextInput`
width: 100%;
height: ${(props) => props.height || "90px"};
border-radius: 5px;
background: #FFF;
shadow-color: rgba(41, 7, 150, 1);
shadow-offset: 0px 0px;
shadow-opacity: 0.1;
shadow-radius: 5px;
text-align-vertical: top; /* 안드로이드에서 (multiline: true) 속성을 지정할 떄 텍스트가 자동 중앙정렬이 되므로 설정 */
`;