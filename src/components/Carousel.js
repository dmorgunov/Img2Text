import * as React from 'react';
import {
    Text,
    View,
    SafeAreaView,
    Image } from 'react-native';

import SnapCarousel from 'react-native-snap-carousel';

export class Carousel extends React.Component {

    constructor(props){
        super(props);
    }

    _renderItem({item,index}){
        return (
            <View style={{
                backgroundColor:'rebeccapurple',
                borderRadius: 5,
                height: 550,
                padding: 15, }}>

                <Image style={{height: 400, width: 220}} source={{uri: item.path}} />
                <Text>{item.path.substring(item.path.lastIndexOf('/')+1, item.path.length)}</Text>
            </View>

        )
    }

    render() {
        return (
            this.props.images !== null && <SafeAreaView style={{flex: 1,}}>
                <View style={{ flex: 1, flexDirection:'row', justifyContent: 'center', }}>
                    <SnapCarousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.props.images}
                        sliderWidth={300}
                        itemWidth={250}
                        renderItem={this._renderItem} />
                </View>
            </SafeAreaView>
        );
    }

}

export default Carousel