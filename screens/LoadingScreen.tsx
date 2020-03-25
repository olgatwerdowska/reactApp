import React , {useState} from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text, Image, Button} from "react-native";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export const Loading = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Todo App
            </Text>
            <Image source={require('../img/icons8-задача-64.png')}/>
            <Button
                title="Start"
                onPress={() => navigation.navigate('Main')}
            />
        </View>
    );
}
 const styles = StyleSheet.create({
     container:{
         backgroundColor: '#001fab',
         height: '100%',
         justifyContent: 'center',
         alignItems: 'center'
     },
     text:{
         color: '#fff',
         fontSize: 25,
     },

 })