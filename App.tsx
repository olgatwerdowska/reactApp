import React , {useState} from 'react';
import 'react-native-gesture-handler';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {View} from "react-native";
import Navigator from 'react-native-navigator';
import {Main} from "./screens/Main";
import {Loading} from "./screens/LoadingScreen";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


export default function App() {
    const Stack = createStackNavigator();

  return (
       <Navigator
           inirialRoute = {{name: 'homePage'}}
         reanderScene = {this.renderScene}
       />
  );
}

