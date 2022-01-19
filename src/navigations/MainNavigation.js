import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";
import Icon  from "react-native-vector-icons/MaterialCommunityIcons";
import Icon2  from "react-native-vector-icons/Fontisto";
import GalleryScreen from "../screens/GalleryScreen";
import Chat from "../screens/Chat";

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTintColor: 'white',
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: '#075E54',
                },
                headerRight: () =>{
                    return(
                        <View style={{flexDirection: "row",}}>
                            <Icon2 style={{marginRight: 20}} name="search" size={17} color="white"/>
                            <Icon name="dots-vertical" size={20} color="white"/>
                        </View>
                    )
                }
            }}>
                <Stack.Screen name="WhatsApp" component={TabNavigation}/>
                <Stack.Screen name="Gallery" component={GalleryScreen}/>
                <Stack.Screen name="Chat" component={Chat}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;