import React, { Component } from 'react'
import {
    StyleSheet, Button,
    Text, TextInput,
    View, Image,
    Platform
} from 'react-native'
import styles from "../../styles"

// export const DOWNLOAD = require('../assets/icons/download.png');
// import DOWNLOAD from '../assets/icons/download.png';

export default class HistoryItem extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <View style={[{ height: 75, backgroundColor: 'powderblue' }]}>
                <View style={{flexDirection: 'row'}}>


                    <Text style={{width: 100}}>{this.props.item.date}</Text>
                    <Text style={{width: 200}}>{this.props.item.files}</Text>
                    <Text style={{width: 50}}>{this.props.item.percent}</Text>
                    {!this.props.header && <Image source={require('../assets/icons/download.png')} style={{}}/>}

                </View>

            </View>
        )
    }
}

