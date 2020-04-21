'Use Strict';

import React, { Component } from 'react';
import { View, FlatList, Text, Image, SafeAreaView, Dimensions } from 'react-native'
import { Styles } from "./styles";

const windowWidth = Dimensions.get('window').width;

const data=[{nameLetters:'AK', name:'Anand Kumar', views: 90, daysAgo: 121}, {nameLetters:'VJ', name:'Vijay', views: 23, daysAgo: 40}, {nameLetters:'VK', name:'Vinod Kumar', views: 36, daysAgo: 11}]
export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (<SafeAreaView style={Styles.fill}>
            <View style={{ paddingTop: 24, paddingHorizontal: 16, paddingBottom: 8 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>MOST READ ARTICLES</Text>
            </View>
            <FlatList
                data={data}
                renderItem={this.renderCard}
                keyExtractor={(item, index) => index.toString()}/>
        </SafeAreaView>);
    }

    renderCard = ({item}) => {
        return (<View style={Styles.card}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 16 }}>
                <View style={{ borderColor: 'green', borderWidth: 2, height: 50, width: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ backgroundColor: "rgb(232, 233, 239)", height: 44, width: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' }}><Text>{item.nameLetters}</Text></View>
                </View>
                <View style={{ paddingLeft: 8 }}>
                    <Text>{item.name}</Text>
                    <Text>{item.views} views | {item.daysAgo} days ago</Text>
                </View>
            </View>
            <Image source={{ uri: 'https://homepages.cae.wisc.edu/~ece533/images/watch.png' }} style={{ height: 200, width: windowWidth, marginTop: 16 }} />
            <View style={{ padding: 16 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold' }}>The standard Lorem Ipsum passage, used since the 1500s</Text>
                <Text numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
        </View>);
    }
}
