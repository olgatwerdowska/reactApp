import React , {useState} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home} from "./Home";
import {Info} from "./Info";
import {AddTask} from "./AddTask";

export const Main = ({navigator}) => {

    const  Tab = createBottomTabNavigator();
    return (

            <Tab.Navigator>
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Info" component={Info} />
                <Tab.Screen name="AddTask" component={AddTask} />
            </Tab.Navigator>

    );
}