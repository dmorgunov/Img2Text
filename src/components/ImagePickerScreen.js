import React, { Component } from 'react'
import {
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View,
    Platform
} from 'react-native'
import ImagePicker from "react-native-customized-image-picker"
import Ocr from 'react-native-tesseract-ocr'
import styles from '../../styles'
import { Carousel } from "./Carousel"

const Button = (Platform.OS === 'android') ? TouchableNativeFeedback : TouchableOpacity

const imagePickerOptions = {
    multiple: true,
    isCamera: true,
    maxSize: 9,
    title: 'Select images',
    isVideo: false,
    hideCropBottomControls: false
}
const tessOptions = {
    whitelist: null,
    blacklist: null
}

class ImagePickerScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            images: null,
            text: ''
        }
        this.selectImage = this.selectImage.bind(this)
    }

    selectImage() {
        ImagePicker.openPicker(imagePickerOptions).then(
            (images) => {
                this.setState({
                    images: images,
                    text: ''
                })
                images.forEach(image => {
                    this.extractText(image.path.replace('file://', ''))
                })
            })
    }

    extractText(imgPath) {
        Ocr.recognize(imgPath, 'LANG_ENGLISH', tessOptions)
            .then((res) => {
                    this.setState({ text: this.state.text.concat(res) })
                }
            )
    }

    render() {
        const { images } = this.state
        return (
            <View style={styles.container}>
                <Carousel images={images}/>
                <View style={[{ flexDirection: 'row' }]}>
                    <Button onPress={this.selectImage}>
                        <View style={[styles.image, styles.imageContainer, styles.rounded]}>
                            <Text>Select images!</Text>
                        </View>
                    </Button>
                    {
                        !images || <Button onPress={() => this.props.navigation.navigate('EditResult', {text: this.state.text})}>
                            <View style={[styles.image, styles.imageContainer, styles.rounded]}>
                                <Text>Next step!</Text>
                            </View>
                        </Button>
                    }
                </View>
            </View>
        )
    }
}

ImagePickerScreen.navigationOptions = {
    title: 'Img2Text'
}

export default ImagePickerScreen
