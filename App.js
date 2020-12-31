import React, {Component} from 'react';
import {Button, View, Text} from 'react-native';

class RedButton extends Component {
    displayAlert =()=> {
        alert("I am an alert box");
    }
    render() {
        return (
            <Button title = "Click Me" color = {this.props.color} onPress = {this.displayAlert}/>
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <View style = {{marginTop: 250}}>
                <AnyColorButton color = "green"/>
                <Text> First React Native </Text>
            </View>
        );
    }
}