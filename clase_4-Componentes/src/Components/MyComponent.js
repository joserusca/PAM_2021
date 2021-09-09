import React, { Component } from 'react';
import {
    View,
    Image,
    Button,
    Alert,
    Text,
} from 'react-native';
import styles from './Estilos';


// export default function MyComponent(props) {
//     return (
//     <>
//         <Text>{props.firstname}</Text>
//         <Text>{props.lastname}</Text>
//         <Image source={require("@assets/minions.jpg")}/>      
//         <Button title="Press me!" color='orange' onPress={() => Alert.alert("Se presiono el boton.")}/>
//     </>);
//   }

export default class MyComponent extends Component {
    constructor(props) {
        super(props);
 

        this.mostrar = this.mostrar.bind(this, this.props.lastname, this.props.firstname);
        this.eliminar = this.props.onDelete.bind(this, this.props.person.id);
    }

    mostrar = (a, b) => {
         //Alert.alert("Se presiono el boton.")
        Alert.alert("## Se presiono " + a + ", " + b);
    }

    render() {
        return (
        <View style={styles.tarjeta}>
            <Text style={styles.tarjetaTexto}>{this.props.person.id}) {this.props.person.apellido}, {this.props.person.nombre} - {this.props.person.edad}</Text>
            <Button title="Eliminar" onPress={this.eliminar}></Button>
        </View>);
    }
}

