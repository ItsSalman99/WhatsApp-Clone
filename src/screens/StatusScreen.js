import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const StatusScreen = () => {
    return(
        <View style={{flexDirection: "column",backgroundColor: '#EAEDED', height: '100%'}}>
            <TouchableOpacity style={{flexDirection: "row", padding: 10,backgroundColor: 'white'}}>
                <View style={{flex: 0.5}}>
                    <Image source={require('../assets/man.jpg')} style={{width: 50, height: 50, borderRadius: 100}}/>
                    <Icon name="plus-circle" size={22} color="#25D366" style={{backgroundColor: 'white',marginLeft: 30,marginTop: -20, width: 20,borderRadius: 100,textAlign:"center"}} />
                </View>
                <View style={{}}>
                    <Text style={{fontSize: 20}}>My Status</Text>
                    <Text style={{color: 'gray'}}>Tap to add a status update</Text>
                </View>
            </TouchableOpacity>
            <View style={{padding: 10,}}>
                <Text style={{color:'#839192'}}>Recent Status</Text>
            </View>
            <View style={{flex: 1,backgroundColor: 'white'}}>
                <TouchableOpacity style={{flexDirection: "row",padding: 10}}>
                    <View style={{flex: 0.5}}>
                        <Image source={require('../assets/man.jpg')} style={{width: 50, height: 50, borderWidth: 3, borderRadius: 100, borderColor: '#25D366'}}/>
                    </View>
                    <View style={{flex: 2}}>
                        <Text style={{fontSize: 18}}>Sohal Parosi</Text>
                        <Text style={{color: '#839192'}}>44 minutes ago</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default StatusScreen;
