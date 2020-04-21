'Use Strict';

import React, { Component } from 'react';
import { View, FlatList, Text, Image, SafeAreaView } from 'react-native'
import { Styles } from "./styles";

const sampleImage = require('../../../assets/images/sampleImage.png')
const data=[{nameLetters:'AK', name:'Anand Kumar', views: 90, daysAgo: 121}, {nameLetters:'VJ', name:'Vijay', views: 23, daysAgo: 40}, {nameLetters:'VK', name:'Vinod Kumar', views: 36, daysAgo: 11}]
export default class HomeScreen extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (<SafeAreaView style={Styles.fill}>
            <View style={Styles.headingContainer}>
                <Text style={Styles.headingText}>MOST READ ARTICLES</Text>
            </View>
            <FlatList
                data={data}
                renderItem={this.renderCard}
                keyExtractor={(item, index) => index.toString()}/>
        </SafeAreaView>);
    }

    renderCard = ({item}) => {
        return (<View style={Styles.card}>
            <View style={Styles.thumbnailAndNameContainer}>
                <View style={Styles.imageContainer}>
                    <View style={Styles.thumbnailContainer}><Text>{item.nameLetters}</Text></View>
                </View>
                <View style={Styles.nameContainer}>
                    <Text>{item.name}</Text>
                    <Text>{item.views} views | {item.daysAgo} days ago</Text>
                </View>
            </View>
            <Image source={sampleImage} style={Styles.mainImage} />
            <View style={Styles.contentContainer}>
                <Text style={Styles.contentHeading}>The standard Lorem Ipsum passage, used since the 1500s</Text>
                <Text numberOfLines={3}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
            </View>
        </View>);
    }
}
