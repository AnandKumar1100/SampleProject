'Use Strict';

import React, { Component } from 'react';
import { View, FlatList, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native'
import { Styles } from "./styles";
import Icon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const politics = require('../../../assets/images/Politics.png')
const entertainment = require('../../../assets/images/Entertainment.png')
const auto = require('../../../assets/images/Auto.png')
const hatke = require('../../../assets/images/Hatke.png')
const hike = require('../../../assets/images/hike.png')
const indiaGate = require('../../../assets/images/IndiaGate.png')
const international = require('../../../assets/images/Travel.png')
const science = require('../../../assets/images/Science.png')
export default class HomeScreen extends Component {

    render() {
        return (<SafeAreaView style={Styles.fill}>
            <View style={Styles.searchContainer}>
                <View style={Styles.searchInnerContainer}>
                    <View style={Styles.searchIconContainer}>
                    <Icon name='search' size={18} color={'rgb(117, 118, 124)'} style={Styles.padding_1} />
                        <Text style={Styles.searchText}>Search for news</Text>
                        </View>
                </View>
            </View>
            <ScrollView nestedScrollEnabled={true}>
                <View style={Styles.voteNowCard}>
                    <Text style={Styles.pollText}>poll</Text>
                    <View style={Styles.voteNowTextContainer}><Text style={Styles.voteNowText}>Vote Now</Text></View>
                </View>
                <View style={Styles.categoriesContainer}>
                    <Text style={Styles.categoriesText}>CATEGORIES</Text>
                    <View style={Styles.horizontalLine} />
                    <FlatList
                        data={[{ iconName: 'feed', title: 'MY FEED', id: 1 }, { iconName: 'newspaper-o', title: 'ALL NEWS', id: 2 }, { iconName: 'star', title: 'TOP STORIES', id: 3 }, { iconName: 'fire', title: 'TRENDING', id: 4 }, { iconName: 'bookmark', title: 'BOOKMARKS', id: 5 }, { iconName: 'eye-slash', title: 'UNREAD', id: 6 }]}
                        renderItem={this.renderCategories}
                        contentContainerStyle={Styles.categoriesListContainer}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={this.extractKey}
                    />
                </View>
                <View style={Styles.suggestTopicsContainer}>
                    <Text style={Styles.suggestTopicsText}>SUGGESTED TOPICS</Text>
                    <View style={Styles.suggestTopicsHorizontalLine} />
                    <FlatList
                        data={[{ id: 1, imageName: indiaGate, title: 'CAA' }, { id: 2, imageName: international, title: 'Coronavirus' }, { id: 3, imageName: indiaGate, title: 'India' }, { id: 4, imageName: hatke, title: 'Business' }, { id: 5, imageName: politics, title: 'Politics' }, { id: 6, imageName: entertainment, title: 'Sports' }, { id: 7, imageName: science, title: 'Technology' }, { id: 8, imageName: hike, title: 'Startups' }, { id: 9, imageName: entertainment, title: 'Travel' }, { id: 10, imageName: hatke, title: 'Hatke' }, { id: 11, imageName: international, title: 'International' }, { id: 12, imageName: auto, title: 'Automobile' }, { id: 13, imageName: science, title: 'Science' }]}
                        renderItem={this.renderTopics}
                        numColumns={3}
                        contentContainerStyle={Styles.suggestTopicsList}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={this.extractKey}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>);
    }

    extractKey = (item, index) => index.toString()

    renderCategories = ({ item }) => {
        return (<View style={Styles.eachCategoriesContainer}>
            {item.iconName === 'star' || item.iconName === 'newspaper-o' || item.iconName === 'news' || item.iconName === 'bookmark' || item.iconName === 'eye-slash' || item.iconName === 'feed' ? <FontAwesomeIcon name={item.iconName} size={28} color={'#379aff'}/> : item.iconName === 'fire' ? <MaterialCommunityIcons name={item.iconName} size={28} color={'#379aff'}/> : <Icon name={item.iconName} size={28} color={'#379aff'}/>}
            <Text style={{ paddingTop: 16, color: item.id == 1 ? '#379aff' : '#6b6b6b', fontSize: 12, fontWeight:item.id == 1 ? 'bold' : 'normal'}}>{item.title}</Text>
        </View>)
    }

    renderTopics = ({ item }) => {
        return (<View style={Styles.topicsContainer}>
            <ImageBackground style={Styles.topicsTextContainer} source={item.imageName} resizeMode={'contain'}>
            <Text style={Styles.topicsText}>{item.title}</Text>
        </ImageBackground></View>)
    }
}
