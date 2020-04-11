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
        return (<View style={Styles.flexDirection_row}>
            <Text style={Styles.cellText}>Title</Text>
            <Text style={Styles.cellText}>Url</Text>
            <Text style={Styles.cellText}>Date</Text>
            <Text style={Styles.cellText}>Author</Text>
        </View>)
    }

    _renderData = ({ item, index }) => {
        return (<View><ModalScreen data={item} /></View>);
    }

    _renderEmptyData = () => {
        return(<View style={Styles.emptyDataContainer}><Text style={Styles.emptyDataText}>No data to show</Text></View>)
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

    handleFilter = () => {
        if (this.props.list.length == 0 || !this.state.value) {
            alert('No Items')
            return
        }
        const filteredList = this.props.list.filter((eachItem) => {
            console.log(eachItem.title.indexOf(this.state.value))
            if ((eachItem.title && eachItem.title.indexOf(this.state.value) > -1) || (eachItem.created_at && eachItem.created_at.indexOf(this.state.value))) {
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
            <View style={Styles.headerBtnContainer}>
                <View style={Styles.searchBtnContainer}>
                    <TextInput style={Styles.textInput} onChangeText={this.handleOnChangeText}/>
                    <TouchableOpacity onPress={this.searchItem}><Text>Search</Text></TouchableOpacity>
                </View>
                <TouchableOpacity onPress={this.handleFilter} style={{flex: 0.50, justifyContent:'center', alignItems:'center'}}><Text>Filter</Text></TouchableOpacity>
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
