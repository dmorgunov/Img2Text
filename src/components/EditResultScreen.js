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
            text: this.props.navigation.getParam('text',''),

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
