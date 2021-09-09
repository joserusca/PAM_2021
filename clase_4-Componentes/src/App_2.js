import React, {Component} from 'react';
import { 
    Alert, 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Button,
    ScrollView,
    SafeAreaView
} from 'react-native';



export default class App_1 extends Component {

  render() {



  return ( 
    
      <View style={styles.container}>  
          <View style={styles.Vista1}><Text>1</Text></View>
          <View style={styles.Vista2}></View>  
          <View style={styles.Vista1}><Text>1</Text></View>   
          <View style={styles.Vista2}></View>
          <View style={styles.Vista1}><Text>1</Text></View>   
          <View style={styles.Vista2}></View>        
      </View>
  );
}
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "space-around"
        
    },
    Vista1: {
        height: 200,
        width: 100,
        backgroundColor: 'red',
    },
    Vista2: {
        height: 200,
        width: 100,
        backgroundColor: 'blue'
    }
})