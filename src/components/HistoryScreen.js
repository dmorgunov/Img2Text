import React, { Component } from 'react'
import {
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
    Platform
} from 'react-native'
import styles from '../../styles'
import HistoryItem from "./HistoryItem"

class HistoryScreen extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={[ {}]}>
                <HistoryItem item={{date: 'Date', files: 'Images', percent: 'Percent'}} header/>
                <HistoryItem item={{date: '21.01.2020 10:12', files: 'text.png, sometext.png, engTest.png', percent: '99.99'}}/>
                <HistoryItem item={{date: '21.01.2020 10:13', files: 'text.png', percent: '99.99'}}/>
                <HistoryItem item={{date: '21.01.2020 10:14', files: 'text.png', percent: '99.99'}}/>
                <HistoryItem item={{date: '21.01.2020 10:17', files: 'text.png', percent: '99.99'}}/>

            </View>
        )
    }
}

HistoryScreen.navigationOptions = {
    title: 'History'
}

export default HistoryScreen
