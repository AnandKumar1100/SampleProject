'Use Strict';

import React, { Component } from 'react';
import { View, FlatList, Text, SafeAreaView, ScrollView, ImageBackground } from 'react-native'
import { Styles } from "./styles";
import Icon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Categories, Topics } from './dummyData'
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
                        data={Categories}
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
                        data={Topics}
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
            {this.renderCategoriesIcon(item.iconName)}
            <Text style={{ paddingTop: 16, color: item.id == 1 ? '#379aff' : '#6b6b6b', fontSize: 12, fontWeight:item.id == 1 ? 'bold' : 'normal'}}>{item.title}</Text>
        </View>)
    }

    renderCategoriesIcon = (type) => {
        switch (type) {
            case 'star':
            case 'newspaper-o':
            case 'news':
            case 'bookmark':
            case 'eye-slash':
            case 'feed':
                return <FontAwesomeIcon name={type} size={28} color={'#379aff'}/>;
            case 'fire':
                return <MaterialCommunityIcons name={type} size={28} color={'#379aff'}/>;
        }
    }

    renderTopics = ({ item }) => {
        return (<View style={Styles.topicsContainer}>
            <ImageBackground style={Styles.topicsTextContainer} source={item.imageName} resizeMode={'contain'}>
            <Text style={Styles.topicsText}>{item.title}</Text>
        </ImageBackground></View>)
    }
}
