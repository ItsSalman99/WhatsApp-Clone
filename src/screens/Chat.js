import React, {useState, useEffect } from "react";
import { View, Text, StatusBar, ScrollView, TouchableOpacity, TextInput} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Chat = ({navigation,route}) => {
    
    useEffect(() => {
        navigation.setOptions({
            title: route.params.title
        })   
    })

    return(
        <View style={{flex:1, justifyContent: 'flex-end', paddingVertical: 10, paddingHorizontal: 10}}>
        <StatusBar barStyle="light-content" backgroundColor="#075E54" />
        <TouchableOpacity>
            <Text style={{width: 240,backgroundColor: '#075E54',color: '#fff',fontSize: 17, padding: 5, borderRadius: 20,paddingHorizontal: 10}}>{route.params.msg}</Text>
        </TouchableOpacity>
        <View style={{flex: 0.1, flexDirection: 'row',justifyContent:'space-evenly',paddingVertical: 20,}}>
            <View>
                <TextInput placeholder="Message" placeholderTextColor={'#000'} style={{width: 280,color: '#000',borderWidth: 1, borderRadius: 10, height: 50}}/>
            </View>
            <View>
                <TouchableOpacity style={{backgroundColor:'#075E54', width: 50, alignItems: 'center',justifyContent: "center",borderRadius: 20, padding: 10, height: 50}}>
                    <Icon name="send" size={15} color="white"/>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}

export default Chat;
