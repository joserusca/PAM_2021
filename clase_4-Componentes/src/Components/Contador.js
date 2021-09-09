import React, { Component } from 'react';
import {
    View,
    Image,
    Button,
    Alert,
    Text
} from 'react-native';

export default class Contador extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cont: new Date().toLocaleTimeString(),
            isRunning: false,
        }
    }

    startWatch() {
        idTimer = setInterval(() => {
            this.setState({cont: new Date().toLocaleTimeString(), isRunning: true});
        }, 1000);
    }

    stopWatch() {
        clearInterval(idTimer);
        this.setState({isRunning: false});
    }

    componentDidMount() {
        console.log("Montando");
    }

    componentDidUpdate() {
        console.log("update!");
    }

    componentWillUnmount() {
        console.log("Desmontar");
        this.stopWatch();
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 30}}>{this.state.cont}</Text>
                <Button title="Start Watch!" onPress={this.startWatch.bind(this)} disabled={this.state.isRunning} ></Button>
                <Button title="Stop Watch!" onPress={this.stopWatch.bind(this)} disabled={!this.state.isRunning} ></Button>
            </View>
        )
    }
}