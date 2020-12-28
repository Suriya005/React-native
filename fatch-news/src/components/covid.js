import React from 'react'
import {View,Text,Image,FlatList,StyleSheet} from 'react-native'

const Covid = ({Confirmed, Recovered, Hospitalized, Deaths, UpdateDate}) =>{
    return(
        <View>
            <Text>{Confirmed.toS}</Text>
            <Text>{Recovered}</Text>
            <Text>{Hospitalized}</Text>
            <Text>{Deaths}</Text>
            <Text>{UpdateDate}</Text>
        </View>
    );
}