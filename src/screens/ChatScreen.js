import React, {useState, useEffect } from "react";
import { View, Text,TouchableOpacity,Image, FlatList} from "react-native";
import Skeleton from "../components/Skeleton";

const ChatScreen = () => {
    
    const [isLoading,setLoading] = useState(true);
    const [data,setData] = useState([]);

    useEffect(() => {
        fetch('http://192.168.42.117:8000/api/users',{method: 'GET'})
        .then((response)=>response.json())
        .then((json) => setData(json))
        .catch((error) => console.warn(error))
        .finally(() => setLoading(false));
    }, []);

    return(
        <View>
            {isLoading ? <Skeleton style={{marginTop: 100}}></Skeleton> : (
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                renderItem={({item})=> (
                    <TouchableOpacity key={item} style={{flexDirection: "row", padding: 5}}>
                            
                            <View style={{flex: 0.4, alignItems: "center",padding:5}}>
                                <Image source={require('../assets/man.jpg')} style={{width: 50,height:50, borderRadius: 100}}/>
                            </View>
                            <View style={{flex:1,padding:5}}>
                                <Text style={{fontSize: 20}}>{item.name}</Text>
                                <Text style={{color: 'gray'}}>{item.email}</Text>
                            </View>
                            <View style={{flex: 0.3,padding:5}}>
                                <Text style={{color: 'gray'}}>today</Text>
                            </View>
                            
                        </TouchableOpacity>
                )}
            >
            </FlatList>)}
        </View>
    );
}

export default ChatScreen;
