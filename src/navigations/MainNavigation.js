import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigation from "./TabNavigation";


const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTintColor: 'white',
                headerShadowVisible: false,
                headerStyle: {
                    backgroundColor: '#075E54',
                }
            }}>
                <Stack.Screen name="WhatsApp" component={TabNavigation}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigation;