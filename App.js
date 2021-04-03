import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Alert,
} from "react-native"; 
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

//create Stack Object
const { Navigator, Screen } = createStackNavigator();

const LoginScreen = props => {
  const { navigation, route } = props;
  const [name,setName]= useState('');
  
  const login = ()=>{
    if(name){
      navigation.push('Details', {name: name})
    } else {
      Alert.alert("Alert", "Please enter User Name");
    }
      
  }
  return  (<View style={styles.container}>
    <Image style={styles.image} source={require("./assets/logo.png")} />

    <StatusBar style="auto" />
    <View style={styles.inputView}>
      <TextInput
        style={styles.TextInput}
        placeholder="Enter namae"
        placeholderTextColor="#cccccc"
        onChangeText={(email) => setName(email)}
        
      />
    </View>

    <TouchableOpacity style={styles.loginBtn}         
       onPress={login}>
      <Text style={styles.loginBtnText}>LOGIN</Text>
    </TouchableOpacity>
  </View>)
}

const MainScreen = (props) => {
  const { navigation, route } = props;
  GoTocategories= ()=>{
    navigation.push('Categories', {name : route.params.name})
  }
  GoToGoGiftList = ()=>{
    navigation.push('GiftList')
  }
  return (
      <View style={styles.container}>
          <Text style={styles.lab_cart_text}>Lab Cart</Text>
          <TouchableOpacity onPress={GoTocategories}><Image style={styles.cart_items} source={require("./assets/categories.png")} /></TouchableOpacity>
          <TouchableOpacity onPress={GoToGoGiftList}><Image style={styles.cart_items} source={require("./assets/giftlist.png")} /></TouchableOpacity>
      </View>
  );
}

const CategoriesScreen = props => {
  const { navigation, route } = props;
  GoToCategoryList = ()=> {

  }
  return <View style={styles.container}>
      <Text style={styles.lab_cart_text}>Categories</Text>
      <Text style={styles.category_select_text}> Hi {route.params.name},</Text>
      <Text style={styles.category_select_text}> Please select the Category to select products list</Text>
      <TouchableOpacity onPress={GoToCategoryList}><Image style={styles.category_items} source={require("./assets/electronics.png")} /></TouchableOpacity>
      <TouchableOpacity onPress={GoToCategoryList}><Image style={styles.category_items} source={require("./assets/men.png")} /></TouchableOpacity>
      <TouchableOpacity onPress={GoToCategoryList}><Image style={styles.category_items} source={require("./assets/woman.png")} /></TouchableOpacity>
      <TouchableOpacity onPress={GoToCategoryList}><Image style={styles.category_items} source={require("./assets/kids.png")} /></TouchableOpacity>
  </View>
}

const GiftListScreen = props => {
  const { navigation, route } = props;
  return <View style={styles.container}>
      <Text>Home Screen : {props.extraData}</Text>
  </View>
}

export default function App() {
  return (
    <NavigationContainer>
        <Navigator initialRouteName="login">
            <Screen name="login" component={LoginScreen}  />
            <Screen name="Details" component={MainScreen}  options={{ title: '' }}/>
            <Screen name="Categories" component={CategoriesScreen} options={{ title: 'Home' }}/>
            <Screen name="GiftList" component={GiftListScreen} />
        </Navigator>
    </NavigationContainer>

  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
    height:145,
    width:90,
  },
 
  inputView: {
    borderColor: "#cccccc",
    borderWidth:1,
    borderRadius: 3,
    width: "70%",
    height: 45,
    marginBottom: 20,
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#9e003e",
    color: "#ffffff",
  },
  loginBtnText:{
    color: "#ffffff",
  },
  lab_cart_text:{
    color:"#9e003e",
    fontSize:28,
    fontWeight:"bold",
    marginBottom: 40,
  },
  cart_items:{
    marginBottom: 40,
    height:145,
    width:140,
  },
  category_items:{
    marginBottom: 40,
    height:45,
    width: 300,
    borderRadius: 7,
  },
  category_select_text:{
    fontSize:18,
    width:300,
    lineHeight:25,
    marginBottom: 20,
  },
});