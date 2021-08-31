import React from 'react';
import { 
    Alert, 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    Button,
    ScrollView
} from 'react-native';
import MyComponent from './Components/MyComponent';

function textPress() {
  Alert.alert("Se toco el texto");
}

export default function App() {
  var valores = [{nombre: "Juan", apellido: "Perez", edad: 35},
                 {nombre: "Pablo", apellido: "Fernandez", edad: 25},
                 {nombre: "Ernesto", apellido: "Garcia", edad:43},];

  const listado = valores.map( (item) => <MyComponent firstname={item.nombre} lastname={item.apellido} age={item.edad}/> );
  // var valores = [1,2,3,4,5,6];
  // var valores = Array.from(Array(10).keys());

  // const listado = valores.map( (item) => <Text>{item}</Text> );

  return (
    <ScrollView>
      <View>      
        <Text selectable onPress={textPress} onLongPress={() => Alert.alert("Se presiono largo.")}>Open up App.js to start working on your app!Open up App.jsOpen up App.js to start working on your app!Open up App.js</Text>
        {/* <Image source={require("./minions.jpg")}/> */}
        {/* <Image style={{height: 100, width:100}} source={{uri: "https://fondosmil.com/fondo/34709.jpg"}}></Image>  */}
        {/* <Button title="Press me!" color='orange' onPress={() => Alert.alert("Se presiono el boton.")}/> */}

        { listado }      

      </View>
    </ScrollView>
  );
}

