import React, { Component } from 'react'
import {
    StyleSheet, Button,
    Text, TextInput,
    View,
    Platform
} from 'react-native'
import styles from "../../styles"
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button'

var radio_props = [
    { label: 'HTML', value: 0 },
    { label: 'TXT', value: 1 },
    { label: 'DOC', value: 2 },
    { label: 'DOCX', value: 3 },
    { label: 'ODT', value: 4 },
    { label: 'RTF', value: 5 }
]

export default class SaveResultScreen extends Component {
    state = {
        text: this.props.navigation.getParam('text', ''),
        value: 0,
    }


    render() {
        const { value } = this.state

        return (
            <View style={{
                flex: 1
            }}>

                <RadioForm
                    radio_props={radio_props}
                    initial={0}
                    onPress={(value) => {
                        this.setState({ value: value })
                    }}
                />

                <Button
                    onPress={() => this.writeToFile()}
                    title="Save"/>
            </View>
        )
    }

    writeToFile() {
        console.log('writeToFile')
        console.log(this.state.text)
        console.log(radio_props[this.state.value])


      /*  // require the module
        var RNFS = require('react-native-fs');

        // get a list of files and directories in the main bundle
        RNFS.readDir(RNFS.MainBundlePath) // On Android, use "RNFS.DocumentDirectoryPath" (MainBundlePath is not defined)
            .then((result) => {
                console.log('GOT RESULT', result);

                // stat the first file
                return Promise.all([RNFS.stat(result[0].path), result[0].path]);
            })
            .then((statResult) => {
                if (statResult[0].isFile()) {
                    // if we have a file, read it
                    return RNFS.readFile(statResult[1], 'utf8');
                }

                return 'no file';
            })
            .then((contents) => {
                // log the file contents
                console.log(contents);
            })
            .catch((err) => {
                console.log(err.message, err.code);
            });*/

        this.props.navigation.navigate('History')
    }
}


SaveResultScreen.navigationOptions = {
    title: 'Save results'
}
