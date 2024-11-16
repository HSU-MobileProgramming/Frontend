import styled from 'styled-components'
import TopBar from '../shared/component/TopBar'
import StandardInput from '../shared/component/StandardInput'
import InputSection from '../entities/SignUp/InputSection'
import CheckBoxSection from '../entities/SignUp/CheckBoxSection'
import StandardButton from '../shared/component/StandardButton'
import { useNavigation } from '@react-navigation/native'
export default function SignUp() {
  const navigation = useNavigation();

  const onPressButton = () => {
    navigation.navigate("ProfileSetting")
  }
  return (
    <MainLayout>
        <TopBar text="SIGN UP"/>

        <InputSection/>

        <CheckBoxSection/>

        <StandardButton text="가입하기" onPress={onPressButton}/>
    </MainLayout>
  )
}

const MainLayout = styled.View`
padding : 0 21px 0 21px;
height : 100%;
background-color : #F8F8F8;
`