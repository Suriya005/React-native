import React,{Component} from 'react'
import {SafeAreaView,View,Text,TextInput,Button,Alert,StyleSheet,ActivityIndicator} from 'react-native'

import axios from 'axios'
import Covid from './components/covid'

const Covid_API = 'https://covid19.th-stat.com/api/open/today'

export default class Main extends Component{
    constructor(props){
        super(props)

        this.state = {
            //isLoading:false,
            Confirmed:'',
            Recovered:'',
            Hospitalized:'',
            Deaths:'',
            UpdateDate:'',
        }
    }
    
    render(){
        const { isLoading, Confirmed, Recovered, Hospitalized, Deaths, UpdateDate} =this.state
        return(
            <SafeAreaView>
                <View>
                    <View>
                        
                    </View>
                    <View>
                        <Button 
                            title="ตรวจสอบข้อมูล"
                            color="#0064e1"
                            onPress={searchCovid}
                        />
                    </View>
                    <View>
                        <View>
                            <Text>{this.Confirmed}</Text>
                            <Text>{this.Recovered}</Text>
                            <Text>{this.Hospitalized}</Text>
                            <Text>{this.Deaths}</Text>
                            <Text>{this.UpdateDate}</Text>
                        </View>
                        {/* {isLoading && <ActivityIndicator
                        size="large"color="#0064e1"
                        />}
                        {!isLoading && <Covid 
                        Confirmed={Confirmed} 
                        Recovered={Recovered}
                        Hospitalized={Hospitalized}
                        Deaths={Deaths}
                        UpdateDate={UpdateDate}
                        />} */}
                    </View>
                    
                </View>
            </SafeAreaView>
        );
    }

    

    searchCovid = async() =>{
        try{
            this.setState({isLoading:true}) 

            const {data:covidData} = await axios.get(`${Covid_API}`)
            const {Confirmed , Recovered , Hospitalized , Deaths , UpdateDate} = covidData

            this.setState({
                Confirmed,
                Recovered,
                Hospitalized,
                Deaths,
                UpdateDate,
                isLoading:false
            })
        }catch(e){
            Alert.alert('Error 1234' , e)
        }
    }
}