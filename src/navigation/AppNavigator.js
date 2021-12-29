import React, { useContext } from "react";
import firebase from "firebase/app";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthContext } from "../provider/AuthProvider";

// Main
import Home from "../screens/Home";
import SecondScreen from "../screens/SecondScreen";

// Auth screens
import Login from "../screens/auth/Login";
import Register from "../screens/auth/Register";
import ForgetPassword from "../screens/auth/ForgetPassword";

import Loading from "../screens/utils/Loading";


// Better put your these secret keys in .env file
const firebaseConfig = {
  apiKey: "AIzaSyDvL8Ch5PcE_j3zYTzeO2fvn4T0WJLGDxg",
  authDomain: "",
  databaseURL: "",
  projectId: "winwin-374db",
  storageBucket: "",
  messagingSenderId: "",
  appId: "1:569492845592:android:b3ba3244bff0f02d8d7f6d",
};
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const AuthStack = createStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen name="Register" component={Register} />
      <AuthStack.Screen name="ForgetPassword" component={ForgetPassword} />
    </AuthStack.Navigator>
  );
};

const MainStack = createStackNavigator();

const Main = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen name="SecondScreen" component={SecondScreen} />
    </MainStack.Navigator>
  );
};

const HomeFuncition = () => {
  return (
    <HomeScreen/>
  );
};


export default () => {
  const auth = useContext(AuthContext);
  const user = auth.user;
  return (
    <NavigationContainer independent={true}>
      {user == null && <Loading />}
      {user == false && <Auth/>}
      {user == true && <Main />}
    </NavigationContainer>
  );
};
