import React, { Component } from 'react';
import {
    View,
    Image,
    Button,
    Alert,
    Text
} from 'react-native';


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
        this.state = {
            contador: this.props.age,
        }
    }

    mostrar() {
        Alert.alert("Se presiono el boton.")
    }

    render() {
        return (
        <>
            <Text>{this.props.firstname}</Text>
            <Text>{this.props.lastname}</Text>            
            <Text>Contador: {this.state.contador}</Text>
            <Text>Contador original: {this.props.age}</Text>
            <Image source={require("@assets/minions.jpg")}/>      
            {/* <Button title="Press me!" color='orange' onPress={this.mostrar}/> */}
            <Button title="Press me!" color='orange' onPress={ () => Alert.alert("Se presiono " + this.props.lastname + ", " + this.props.firstname)}/>
            <Button title="Incrementar" onPress={() =>this.setState({contador: this.state.contador + 1}) }/>
        </>);
    }
}