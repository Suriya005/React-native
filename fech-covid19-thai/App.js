import React , {Component} from 'react';
import { StyleSheet,SafeAreaView ,Text, TouchableOpacity, View ,FlatList,ActivityIndicator} from 'react-native';

export default class App extends Component {
    constructor(props){
      super(props)
      this.state ={
        isLoading:true,
        dataSource:'',
        Confirmed:'',
        Recovered:'',
        Hospitalized:'',
        Deaths:'',
        UpdateDate:'',
        NewConfirmed:'',
        NewHospitalized:'',
        NewRecovered:'',
        NewDeaths:''

      }
    }

    componentDidMount(){
      fetch('https://covid19.th-stat.com/api/open/today')
      .then((response) => response.json())
      .then((responseJson) =>{
        this.setState({
          isLoading:false,
          dataSource:responseJson,
        })
      })
    }

  render(){
    let { container , Confirmed , itemDetail1 , itemDetail2, itemDetail3 , title ,titleText} = styles
    let {dataSource , isLoading} = this.state
    if(isLoading){
      return(
        <View style={container}>
          <ActivityIndicator size="large" animating />
        </View>
      )
    }else{
      return (
        
          <View style={container}>

            <View style={title}>
              <Text style={titleText}>รายงานสถานการณ์ โควิด-19</Text>
              <Text> {"อัพเดทข้อมูลล่าสุด "+dataSource.UpdateDate}</Text>
            </View>

            <View style={Confirmed}> 
              <Text style={{fontSize:18, fontWeight:'bold',color:'#FFFFFF'}}> {"ยอดผู้ติดเชื้อสะสม "}</Text>
              <Text style={{fontSize:18, fontWeight:'bold',color:'#FFFFFF'}}> {dataSource.Confirmed+ " คน"}</Text>
              <Text style={{fontSize:18, fontWeight:'bold',color:'#FFFFFF'}}> {"[ +" + dataSource.NewConfirmed + " ]"}</Text>
            </View>
            
            

              <View style={itemDetail1}>
              <Text style={{fontSize:18, fontWeight:'bold',color:'#FFFFFF'}}> {"รักษาหายแล้ว "}</Text>
              <Text style={{fontSize:18, fontWeight:'bold',color:'#FFFFFF'}}> {dataSource.Recovered + " คน"}</Text>
              <Text style={{fontSize:18, fontWeight:'bold',color:'#FFFFFF'}}> {"[ +" + dataSource.NewRecovered + " ]"}</Text>
              </View>

              <View style={itemDetail2}>
              <Text style={{fontSize:18, fontWeight:'bold',color:'#FFFFFF'}}> {"กำลังรักษาอยู่ในโรงพยาบาล "}</Text>
              <Text style={{fontSize:18, fontWeight:'bold',color:'#FFFFFF'}}> {dataSource.Hospitalized+ " คน"}</Text>
              <Text style={{fontSize:18, fontWeight:'bold',color:'#FFFFFF'}}> {"[ +" + dataSource.NewHospitalized + " ]"}</Text>
              </View>

              <View style={itemDetail3}>
              <Text style={{fontSize:18, fontWeight:'bold',color:'#FFFFFF'}}> {"เสียชีวิต "}</Text>
              <Text style={{fontSize:18, fontWeight:'bold',color:'#FFFFFF'}}> {dataSource.Deaths+ " คน"}</Text>
              <Text style={{fontSize:18, fontWeight:'bold',color:'#FFFFFF'}}> {"[ +" + dataSource.NewDeaths + " ]"}</Text>
              </View>

            
            <View style={styles.space}>
              <Text > ** แอพนี้จัดทำเพื่อการศึกษาเท่านั้นห้ามมีการซื้อขาย **</Text>
              <Text style={{fontWeight:'bold'}} >  Dev by : Suriya005  //   GitHub : suriya005 </Text>
            </View>
          </View>
          
        
      )
    }    
  }
}


const styles = StyleSheet.create({
  container:{
    
    flex:1.5,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    paddingTop:50,
    
  },
  Confirmed:{
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#E1298E',
    flexDirection:'column',
    flex:0.5,
    borderRadius:20,
    marginTop:10,
    width:300,
    marginBottom:10,
    padding:10
    

  },
  itemDetail1:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    flex:0.5,
    padding:10,
    marginBottom:10,
    borderRadius:20,
    width:300,
    backgroundColor:'#046034'
  },
  itemDetail2:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    flex:0.5,
    padding:10,
    marginBottom:10,
    borderRadius:20,
    width:300,
    backgroundColor:'#179C9B'
  },
  itemDetail3:{
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    flex:0.5,
    padding:10,
    marginBottom:10,
    borderRadius:20,
    width:300,
    backgroundColor:'#666666'
  },
  title:{
    justifyContent:'center',
    flex:0.5,
    marginBottom:30,
    fontWeight:'500'
    
  },
  titleText:{
    fontSize:30
  },
  space:{
    flex:2,justifyContent:'flex-end' ,flexDirection:'column' ,alignItems:'center'
  }
  
})