import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";
//import AppNavigator from "./src/navigation/AppNavigator";
// import { AuthProvider } from "./src/provider/AuthProvider";
// import { ThemeProvider } from "react-native-rapi-ui";
import HomeScreen from "./src/screens/utils/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Redirection from "./src/screens/utils/Redirection";

const AuthStack = createStackNavigator();

export default function App(props) {

  return (
    <NavigationContainer >
     <AuthStack.Navigator initialRouteName="Homescreen"
    screenOptions={{
      headerShown: false,
    }}
    >
    <AuthStack.Screen name="Homescreen" component={HomeScreen} />
     <AuthStack.Screen name="Redirection" component={Redirection} />
  </AuthStack.Navigator>
    </NavigationContainer>

  );
}
