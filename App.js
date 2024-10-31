import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

//페이지
import World from "./pages/World";
import Splash from "./pages/Splash";
import StartTravelLog from "./pages/StartTravelLog";
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash" //초기 경로 설정
        screenOptions={{ headerShown: false, animationEnabled: false }} //모든 스크린에서 헤더를 숨김
      >
        <Stack.Screen name="Splash" component={Splash}/>
        <Stack.Screen name="World" component={World}/>
        <Stack.Screen name="StartTravelLog" component={StartTravelLog}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;


