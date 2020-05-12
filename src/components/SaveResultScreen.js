import React, { Component } from 'react'
import {
    StyleSheet, Button,
    Text, TextInput,
    View,
    Platform
} from 'react-native'
import styles from "../../styles"
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'HTML', value: 0 },
    {label: 'TXT', value: 1 },
    {label: 'DOC', value: 2 },
    {label: 'DOCX', value: 3 },
    {label: 'ODT', value: 4 },
    {label: 'RTF', value: 4 },
];

export default class SaveResultScreen extends Component {
    state = {
        value: 0,
    };


    render() {
        const { value } = this.state;

        return (
            <View style={{
                flex: 1,
            }}>

                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {this.setState({value:value})}}
                />

                <Button title="Save"/>
            </View>
        )
    }
}


SaveResultScreen.navigationOptions = {
    title: 'Save results'
}
