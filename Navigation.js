import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
//Screen
import HomeScreen from "./src/screens/HomeScreen";
import CreateScreen from "./src/screens/CreateScreen";
import StackScreen from "./src/screens/StackScreen";

const Tab = createBottomTabNavigator();

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator initialRouteName="HomeScreen">
            <HomeStackNavigator.Screen name="Lista Tareas" component={HomeScreen}/>
            <HomeStackNavigator.Screen name="Actualizar" component={StackScreen} />

        </HomeStackNavigator.Navigator>
    )
}

function MyTabs() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ tabBarActiveTintColor: 'green' }}>
            <Tab.Screen name="Home" component={MyStack} options={{ headerShown: false,tabBarIcon:({color,size})=>(<Entypo name="home" size={24} color="black" />)}} />
            <Tab.Screen name="Crear" component={CreateScreen} options={{tabBarIcon: ({color,size})=>(<Ionicons name="create" size={24} color="black" />)}}/>
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}