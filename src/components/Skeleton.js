import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";

const Skeleton = () => {
    
    const array = [1,2,3,4,5,6,7,8,8];
    return (
        <ScrollView style={{ padding: 5}}>
            {array.map(() => (
                <TouchableOpacity style={{flexDirection: "row"}}>
                    
                    <View style={{flex: 0.4, alignItems: "center",padding:5}}>
                        <View style={{backgroundColor: 'lightgray',padding:30, borderRadius: 100}}></View>
                    </View>
                    <View style={{flex:0.9,padding:5}}>
                        <View style={{backgroundColor: 'lightgray', marginTop:5, padding: 5,borderRadius: 50}}></View>
                        <View style={{backgroundColor: 'lightgray', marginTop: 8, padding:5,borderRadius: 50}}></View>
                    </View>
                    <View style={{flex: 0.3,padding:5}}>
                        <View style={{backgroundColor: 'lightgray',marginTop: 5,padding:5,borderRadius: 50}}></View>
                    </View>

                </TouchableOpacity>
            ))}
        </ScrollView>
    )
}


export default Skeleton;