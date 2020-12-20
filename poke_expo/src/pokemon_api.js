import React from 'react'
import {View,Text,FlatList,StyleSheet,Image} from 'react-native'

const Pokemon = ({name,pic,types,desc}) =>{
    return(
        <View>
            <Image
                source={{uri:pic}}
                resizeMode="contain"
            />
            <Text>{name}</Text>
            <FlatList 
                data={types}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                    </View>

                )}
            />
            <View>
                <Text>
                    {desc}
                </Text>
            </View>
        </View>
    );
} 
export default Pokemon;