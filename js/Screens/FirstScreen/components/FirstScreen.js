'Use Strict';

import React, { Component } from 'react';
import { View, FlatList, Text } from 'react-native'
import {Styles} from "./styles";

export default class FirstScreen extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        debugger
        this.props.callAPI()
    }

    _keyExtractor = (item, index) => String(index);

    loadMore = () => {
        this.props.callAPI()
    }

    _getHeader = () => {
        return (<View style={{flexDirection:'row'}}>
            <Text style={{ flex: 0.25, textAlign: 'center'}}>Title</Text>
            <Text style={{flex: 0.25, textAlign: 'center'}}>Url</Text>
            <Text style={{flex: 0.25, textAlign: 'center'}}>Date</Text>
            <Text style={{flex: 0.25, textAlign: 'center'}}>Author</Text>
        </View>)
    }

    _renderData = ({ item, index }) => {
        return (<View style={{flexDirection:'row', borderWidth: 1, borderColor:'black'}}>
            <Text style={{ flex: 0.25, paddingLeft: 5 }}>{item.title}</Text>
            <View style={{width: 2, backgroundColor:'black'}}/>
            <Text style={{ flex: 0.25, paddingLeft: 5 }}>{item.url}</Text>
            <View style={{width: 2, backgroundColor:'black'}}/>
            <Text style={{ flex: 0.25, paddingLeft: 5 }}>{item.created_at}</Text>
            <View style={{width: 2, backgroundColor:'black'}}/>
            <Text style={{flex: 0.25, paddingLeft: 5}}>{item.author}</Text>
        </View>)
    }

    _renderEmptyData = () => {
        return(<View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text style={{fontSize: 20, fontWeight:'bold'}}>No data to show</Text></View>)
    }

    render() {
        const { list } = this.props;
        return (<View style={Styles.fill}>
            <FlatList
                data={list}
                showsVerticalScrollIndicator={false}
                keyExtractor={this._keyExtractor}
                ListHeaderComponent={this._getHeader}
                bounces={false}
                onEndReachedThreshold={0.3}
                onEndReached={this.loadMore}
                extraData={this.props.list}
                renderItem={this._renderData}
                ListEmptyComponent={this._renderEmptyData}
                />
        </View>);
    }
}
