'Use Strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, Button } from 'react-native'

export default class Dropdown extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isDropDownVisible: false
        }
    }

    toggleDropDown = () => {
        this.setState({ isDropDownVisible: !this.state.isDropDownVisible })
    }

    onChangeLanguage = (selectedLanguage) => {
        this.props.saveLanguageToStore(selectedLanguage)
        this.toggleDropDown()
    }

    render() {
        debugger
        return (<><Button
            onPress={this.toggleDropDown}
            title="अA"
            color="green"
        />
            {this.state.isDropDownVisible && this.dropDownModal()}
        </>);
    }

    dropDownModal = () => {
        const { selectedLanguage } = this.props;
        return(<Modal
            animationType="slide"
            transparent
            visible={this.state.isDropDownVisible}
        >
            <TouchableOpacity activeOpacity={1} style={{ flex: 1, justifyContent: 'flex-end' }} onPress={this.toggleDropDown}>
                <View style={{backgroundColor:'rgba(0,0,0,0.6)', flex:1}}/>
                <View style={{ backgroundColor: 'white', paddingHorizontal: 24 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16, paddingVertical: 24 }}>Select Language</Text>
                    <TouchableOpacity onPress={()=>this.onChangeLanguage('English')} hitSlop={{top: 10, bottom: 10}} style={{marginBottom: 24}}><Text style={{fontSize: 16, color: selectedLanguage === 'English' ? 'green' : 'black'}}>English</Text></TouchableOpacity>
                    <TouchableOpacity onPress={()=>this.onChangeLanguage('Hindi')} hitSlop={{top: 10, bottom: 10}} style={{marginBottom: 24}}><Text style={{fontSize: 16, color: selectedLanguage === 'Hindi' ? 'green' : 'black' }}>Hindi</Text></TouchableOpacity>
                </View>
            </TouchableOpacity>
        </Modal>)
    }
}