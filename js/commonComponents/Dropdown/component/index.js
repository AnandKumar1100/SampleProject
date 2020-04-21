'Use Strict';

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Modal, Button } from 'react-native'
import { Styles } from "./styles";
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
        return (<Modal
            animationType="slide"
            transparent
            visible={this.state.isDropDownVisible}>
            <View style={Styles.fill}>
                <TouchableOpacity activeOpacity={1} style={Styles.modalBackground} onPress={this.toggleDropDown} />
                <View style={Styles.dropdownContainer}>
                    <Text style={Styles.dropdownTitle}>Select Language</Text>
                    <TouchableOpacity onPress={() => this.onChangeLanguage('English')} hitSlop={{ top: 10, bottom: 10 }} style={Styles.dropdownItem}><Text style={{ fontSize: 16, color: selectedLanguage === 'English' ? 'green' : 'black' }}>English</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.onChangeLanguage('Hindi')} hitSlop={{ top: 10, bottom: 10 }} style={Styles.dropdownItem}><Text style={{ fontSize: 16, color: selectedLanguage === 'Hindi' ? 'green' : 'black' }}>Hindi</Text></TouchableOpacity>
                </View>
            </View>
        </Modal>);
    }
}