import React from "react";
import AppNavigator from "../../navigation/AppNavigator";
import { AuthProvider } from "../../provider/AuthProvider";
import { ThemeProvider } from "react-native-rapi-ui";

export default function Redirection(props) {
  const images = [
    require("./../../../assets/icon.png"),
    require("./../../../assets/splash.png"),
    require("./../../../assets/login.png"),
    require("./../../../assets/register.png"),
    require("./../../../assets/forget.png"),
  ];
 console.log("TEST")
 return (
    <ThemeProvider images={images}>
      <AuthProvider>
        <AppNavigator />
      </AuthProvider>
    </ThemeProvider>
 );
}
