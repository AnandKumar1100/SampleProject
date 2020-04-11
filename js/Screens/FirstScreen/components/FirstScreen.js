'Use Strict';

import React, { Component } from 'react';
import { View, FlatList, Text, TouchableOpacity, TextInput } from 'react-native'
import {Styles} from "./styles";
import ModalScreen from './ModalScreen';

export default class FirstScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            value: undefined,
            filteredList: undefined
        }
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
        return (<ModalScreen data={item} />);
    }

    _renderEmptyData = () => {
        return(<View style={{flex:1, justifyContent:'center', alignItems:'center'}}><Text style={{fontSize: 20, fontWeight:'bold'}}>No data to show</Text></View>)
    }

    searchItem = () => {
        if (this.props.list.length == 0 || !this.state.value) {
            alert('No Items')
            return
        }
        const filteredList = this.props.list.filter((eachItem) => {
            console.log(eachItem.title.indexOf(this.state.value))
            if ((eachItem.title && eachItem.title.indexOf(this.state.value) > -1) || (eachItem.author && eachItem.author.indexOf(this.state.value) > -1) || (eachItem.url && eachItem.url.indexOf(this.state.value) > -1)) {
                return eachItem
            }
        })
        this.setState({ filteredList })
    }

    handleOnChangeText = (value) => {
        this.setState({ value })
    }

    render() {
        const { list } = this.props;
        const { filteredList, value } = this.state;
        return (<View style={Styles.fill}>
            <View style={{ height: 50, flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'black', marginBottom: 15 }}>
                <View style={{flexDirection:'row', flex: 0.50, justifyContent:'center', alignItems:'center'}}>
                    <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, flex: 1 }} onChangeText={this.handleOnChangeText}/>
                    <TouchableOpacity onPress={this.searchItem} style={{ flex: 0.50}}><Text>Search</Text></TouchableOpacity>
                </View>
                <TouchableOpacity style={{flex: 0.50, justifyContent:'center', alignItems:'center'}}><Text>Filter</Text></TouchableOpacity>
            </View>
            <FlatList
                data={filteredList && value ? filteredList : list}
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
