import React, { Component } from 'react'
import {
    StyleSheet, Button,
    Text, TextInput,
    View,
    Platform
} from 'react-native'
import styles from "../../styles"

export default class EditResultScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: 'Mild Splendour of the various-vested Night!\n' +
                'Mother of Wildly-working visions! haill\n' +
                'I watch thy gliding, while with watery light\n' +
                'Thy weak eye glimmers through a ﬂeecy veil;\n' +
                'And when thou lovest thy pale orb to shroud\n' +
                'Behind the gather’d blackness lost on high;\n' +
                'And when thou dartest from the wind-rent cloud\n' +
                'Thy placid lightning o’er the awaken’d sky.'
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <TextInput
                    style={{fontSize: 18, flex: 9, borderColor: 'gray', borderWidth: 5, color: 'black' }}
                    multiline={true}
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text}/>
                <Button title="Save"/>
            </View>
        )
    }
}


EditResultScreen.navigationOptions = {
    title: 'Edit results'
}
