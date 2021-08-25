import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import CameraScreen from "../screens/CameraScreen";
import ChatScreen from "../screens/ChatScreen";
import StatusScreen from "../screens/StatusScreen";
import CallsScreen from "../screens/CallsScreen";

const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
    return(
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarPressColor: 'white',
            tabBarStyle:{
                backgroundColor: '#075E54',
            },
            tabBarLabelStyle:{
                fontSize: 14,
                fontWeight: 'bold'
            }
        }}>
            <Tab.Screen name="Camera" component={CameraScreen} options={{
                tabBarShowLabel: false,
            }}/>
            <Tab.Screen name="Chat" component={ChatScreen}/>
            <Tab.Screen name="Status" component={StatusScreen}/>
            <Tab.Screen name="Calls" component={CallsScreen}/>
        </Tab.Navigator>
    )
}

export default TabNavigation;