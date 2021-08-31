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
import Contador from './Components/Contador';
import MyComponent from './Components/MyComponent';

function textPress() {
  Alert.alert("Se toco el texto");
}

export default class App extends Component {
  constructor() {
    super();
    // this.eliminarPersona = this.eliminarPersona.bind(this, id);
    this.state = {
      valores: [],
      original: [
        {id: 1, nombre: "Juan", apellido: "Perez", edad: 35},
        {id: 2, nombre: "Pablo", apellido: "Fernandez", edad: 25},
        {id: 3, nombre: "Ernesto", apellido: "Garcia", edad:43},
      ],
    }
  }

  eliminarPersona(id) {
    console.log(id);
    //Alert.alert("Eliminar: " + id);
    var result = this.state.valores.filter( item=> item.id != id);
    this.setState({valores: result});

  }

  reset() {
    this.setState({valores: this.state.original})
  }

  componentDidMount() {
    this.reset()
  }

  render() {


  const listado = this.state.valores.map( (item) => <MyComponent key={item.id} person={item} onDelete={this.eliminarPersona.bind(this)}/> );
  // var valores = [1,2,3,4,5,6];
  // var valores = Array.from(Array(10).keys());

  // const listado = valores.map( (item) => <Text>{item}</Text> );

  return ( 
    
      <View>  
        <View style={{height:100}}/>
           
        {/* <Text selectable onPress={textPress} onLongPress={() => Alert.alert("Se presiono largo.")}>Open up App.js to start working on your app!Open up App.jsOpen up App.js to start working on your app!Open up App.js</Text> */}
        {/* <Image source={require("./minions.jpg")}/> */}
        {/* <Image style={{height: 100, width:100}} source={{uri: "https://fondosmil.com/fondo/34709.jpg"}}></Image>  */}
        {/* <Button title="Press me!" color='orange' onPress={() => Alert.alert("Se presiono el boton.")}/> */}
        <Button title="Reset" onPress={this.reset.bind(this)}/>
        <ScrollView>
            
        { listado }
        </ScrollView>
      </View>
      
    
    
  );
}
}

