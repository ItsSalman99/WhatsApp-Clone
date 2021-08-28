import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CameraScreen from "../screens/CameraScreen";
import ChatScreen from "../screens/ChatScreen";
import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";
import Icon from "react-native-vector-icons/FontAwesome";

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
    return(
        <Tab.Navigator initialRouteName="Chat" screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarPressColor: 'white',
            tabBarStyle:{
                backgroundColor: '#075E54',
            },
            tabBarLabelStyle:{
                fontSize: 14,
                fontWeight: 'bold',
            }
        }}>
            <Tab.Screen name="Camera" component={CameraScreen} options={{
                tabBarShowLabel: false,
                tabBarShowIcon: true,
                tabBarIcon: ()=> {
                    return(
                        <Icon name="camera" size={15} color="white"/>
                    )
                },
            }}/>
            <Tab.Screen name="Chat" component={ChatScreen} options={{}} screenOptions={{
            }}/>
            <Tab.Screen name="Status" component={StatusScreen}/>
            <Tab.Screen name="Calls" component={CallsScreen}/>
        </Tab.Navigator>
    )
}

export default TabNavigation;