import { NavigationContainer } from "@react-navigation/native";
import React, {useState, useEffect } from "react";
import { View, Text,TouchableOpacity,Image, FlatList, RefreshControl, StatusBar} from "react-native";
import Skeleton from "../components/Skeleton";

const ChatScreen = ({ navigation }) => {
    
    const [isLoading,setLoading] = useState(true);
    const [data,setData] = useState([]);
    const [Refresh, setRefresh] = useState(false)


    const fetchData = () => {
        setRefresh(true)
        fetch('https://mocki.io/v1/f0c56658-4a73-4682-a3bc-871388d0597a',{method: 'GET'})
        .then((response)=>response.json())
        .then((json) => setData(json))
        .catch((error) => console.warn(error))
        .finally(() => setLoading(false));
        setRefresh(false)
    }

    useEffect(() => {
        fetchData()
    },[]);

    const renderItem = ({ item }) => (
        <TouchableOpacity key={item.id} onPress={()=>{navigation.push('Chat', {title: item.name, msg: item.msg})}} style={{flexDirection: "row", padding: 5}}>
                            
        <View style={{flex: 0.4, alignItems: "center",padding:5}}>
            <Image source={require('../assets/man.jpg')} style={{width: 50,height:50, borderRadius: 100}}/>
        </View>
        <View style={{flex:1,padding:5}}>
            <Text style={{fontSize: 20}}>{item.name}</Text>
            <Text style={{color: 'gray'}}>{item.msg}</Text>
        </View>
        <View style={{flex: 0.3,padding:5}}>
            <Text style={{color: 'gray'}}>today</Text>
        </View>
    </TouchableOpacity>
      );

    return(
        <View>
        <StatusBar barStyle="light-content" backgroundColor="#075E54" />
            {isLoading ? <Skeleton style={{marginTop: 100}}></Skeleton> : (
            <FlatList
                refreshControl={
                    <RefreshControl
                        refreshing={Refresh}
                        onRefresh={fetchData}
                    />
                }
                data={data}
                renderItem={renderItem}
                keyExtractor={(item, index) => {
                    return index.toString();
                  }}
            >
            </FlatList>)}
        </View>
    );
}

export default ChatScreen;
