import React from "react";
import { View, Modal, TouchableOpacity, Text } from "react-native";
import {Styles} from "./styles";

export default class ModalScreen extends React.Component {

    constructor(props){
        super(props)
        this.state={
            showModal : false
        }
    }

    onShowDialog = () => {
        
    }

    onDismissDialog = () => {
        
    }

    toggleModalVisiblity = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    renderModal = () => {
        return(<Modal
            animationType="fade"
            transparent={true}
            visible={this.state.showModal}
            onShow={this.onShowDialog}
            onDismiss={this.onDismissDialog}>
            <TouchableOpacity style={Styles.modalParent} activeOpacity={1} onPress={this.toggleModalVisiblity}>
                <TouchableOpacity activeOpacity={1} style={Styles.modalContent}>
                    <Text>{JSON.stringify(this.props.data)}</Text>
                    <TouchableOpacity onPress={this.toggleModalVisiblity} style={Styles.closeBtn}><Text style={Styles.closeBtnText}>Close</Text></TouchableOpacity>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>)
    }

    render() {
        const { data } = this.props
        return (
            <View style={{flex:1}}>
                <TouchableOpacity style={Styles.contentHeaderStyle} onPress={this.toggleModalVisiblity}>
                    <Text style={Styles.cellStyle}>{data.title}</Text>
                    <View style={Styles.verticalSeparator} />
                    <Text style={Styles.cellStyle}>{data.url}</Text>
                    <View style={Styles.verticalSeparator} />
                    <Text style={Styles.cellStyle}>{data.created_at}</Text>
                    <View style={Styles.verticalSeparator} />
                    <Text style={Styles.cellStyle}>{data.author}</Text>
                </TouchableOpacity>
                {this.renderModal()}
            </View>
        );
    }
}
