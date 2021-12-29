import React, {useState} from "react";
import { View, ActivityIndicator, Dimensions, Text, Image, Platform, StyleSheet, TouchableOpacity } from "react-native";
import { Layout, themeColor } from "react-native-rapi-ui";
import {Picker} from '@react-native-picker/picker';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import AppNavigator from "../../navigation/AppNavigator";
import { AuthProvider } from "../../provider/AuthProvider";
import  Redirection  from "./Redirection";
import { ThemeProvider } from "react-native-rapi-ui";



const { width, height } = Dimensions.get("window");


export default function ({ navigation }) {
  const [selectedLanguage, setSelectedLanguage] = useState();
  let [loaded] = useFonts({
    'Piemonte': require('../../../assets/font/Piemonte.otf'),
  });
  
  
  if (!loaded) {
    return null;
  }

  return (
    <Layout>
      <View
        style={{
          height,
          width,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <LinearGradient
        // Background Linear Gradient
        colors={['#ffff', '#d8aff8']}
        style={{height, width}}
      >
               <View
        style={{
          //flex: 1,
          height: height/2,
          alignItems: "center",
          justifyContent: "space-around",          
        }}
      >
        <Text style={styles.message}>Bienvenue sur </Text>
         <Image style={styles.logo}
        source={require("../../../assets/logo.png")}/>
        <Text style={styles.message}>Veuillez choisir votre ville / pays </Text>
        </View>

        <View style ={{width, height: height/3, alignItems: 'center', justifyContent: Platform.OS !== 'ios' ? 'space-around': 'space-between'}}>

        <View style={{width: 250, alignItems: 'center', backgroundColor: Platform.OS === 'ios' ?  null : 'white' }}>
         <Picker
        style={{ height: Platform.OS === 'ios' ? null : 50, width: 250 }}
        mode={"dropdown"}
        dropdownIconRippleColor='#0000'
        dropdownIconColor='#000'
        selectedValue={selectedLanguage} 
        onValueChange={(itemValue, itemIndex) =>
          setSelectedLanguage(itemValue)
        }>
  <Picker.Item label="Abidjan" value="abidjan" />
  <Picker.Item label="Bouaké" value="bouake" />
  <Picker.Item label="Daloa" value="daloa" />
</Picker> 
     </View>  
<TouchableOpacity onPress={()=> navigation.navigate('Redirection')}>
     <View style={{}}>
         
<Ionicons name="md-checkmark-circle" size={32} color="green">
         <Text style={{fontSize: 20, textAlign: 'center'}}> Valider</Text>
</Ionicons>
       </View> 
 </TouchableOpacity>  
          </View>
    </LinearGradient>
      </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  logo: {
      height: "45%",
      resizeMode: 'contain',
      alignSelf: 'center',
      bottom: 0
  },
  message: {
    fontSize: 35,
    fontFamily: 'Piemonte',
    textAlign: 'center'
  }
});