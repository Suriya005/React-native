import React,{Component} from 'react'
import {SafeAreaView,Text,View,TextInput,Button,Alert,StyleSheet,ActivityIndicator,Image} from 'react-native'
import axios from 'axios'
import pokemon from 'pokemon'
import Pokemon from './component/pokemon'
import logo from '../assets/favicon.png'

const POKEMON_API_DATA = 'https://pokeapi.co/api/v2'

export default class Mian extends Component{
    constructor(props){
        super(props)
        this.state = {
            isLoading:false,
            searchInput:'',
            name:'',
            pic:'',
            types:'',
            desc:'',
        }
        
    }

    render(){
        return(
            <SafeAreaView>
                <View>
                    <View>
                        <View>
                            <Image 
                                source={{logo}}
                                styles={{width:100 , higth:100}}
                                resizeMode='center'
                            />
                            <TextInput
                                placeholder="Search Pokemon"
                                onChangeText={(searchInput) => this.setState({searchInput})}
                                value={this.state.searchInput}
                            />
                        </View>
                        <View>
                            <Button
                                title="Search"
                                color="#00F"
                                onPress={this.searchPokemon}
                            />
                        </View>
                    </View>
                    {/* <View>
                        {isLoading && <ActivityIndicator size='large' color='#fff'/>}
                        {!isLoading && (<Pokemon name={name} pic={pic} types={types} desc={desc} /> )}
                    </View> */}
                </View>
            </SafeAreaView>
        );
    }
    searchPokemon = async () =>{
        try{
            const pokemonID = pokemon.getId(this.state.searchInput)
            this.setState({ isLoading:true})
            const {data:pokemonData}=await axios.get(`${POKEMON_API_DATA}/pokemon/${pokemonID}`)
            const {data:pokemonSpecieData}=await axios.get(`${POKEMON_API_DATA}/pokemon-species/${pokemonID}`)
            const {name , sprites,types} = pokemonData
            const {flavor_text_entries} = pokemonSpecieData
            this.setState({
                name,
                pic: sprites.front_default,
                type:this.getType(types),
                desc: this.getDescription(flavor_text_entries),
                isLoading:false
            }) 
        }catch (err){
            Alert.alert('Error','Pokemon not found')
        }
    }

    getType = (types) =>{
        types.map(({slot,type}) =>({
            id:slot,
            name:type.name
        }))
    }

    getDescription = (entries) => {
        entries.find((item) =>item.language.name === 'en').flavor_text
    }
}