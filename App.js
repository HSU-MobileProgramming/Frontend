import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

//페이지
import World from "./pages/World";
import Splash from "./pages/Splash";
import StartTravelLog from "./pages/StartTravelLog";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProfileSetting from "./pages/ProfileSetting";
import DetailTravelLog from "./pages/DetailTravelLog";
import Search from "./pages/Search";
import MyPage from "./pages/MyPage";
import MyLog from "./pages/MyLog";


function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MyPage" //초기 경로 설정
        screenOptions={{ headerShown: false, animationEnabled: false }} //모든 스크린에서 헤더를 숨김
      >
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="World" component={World}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="SignIn" component={SignIn}/>
        <Stack.Screen name="ProfileSetting" component={ProfileSetting}/>
        <Stack.Screen name="MyLog" component={MyLog}/>
        <Stack.Screen name="StartTravelLog" component={StartTravelLog}/>
        <Stack.Screen name="DetailTravelLog" component={DetailTravelLog}/>
        <Stack.Screen name="Search" component={Search}/>
        <Stack.Screen name="MyPage" component={MyPage}/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;