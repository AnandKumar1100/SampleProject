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
            <TouchableOpacity style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.85)', justifyContent:'center' }} activeOpacity={1} onPress={this.toggleModalVisiblity}>
                <TouchableOpacity activeOpacity={1} style={{ backgroundColor: 'white', padding: 20 }}>
                    <Text>{JSON.stringify(this.props.data)}</Text>
                    <TouchableOpacity onPress={this.toggleModalVisiblity} style={{alignSelf:'center', marginTop: 20}}><Text style={{color:'black', fontSize: 20, fontWeight:'bold'}}>Close</Text></TouchableOpacity>
                </TouchableOpacity>
            </TouchableOpacity>
        </Modal>)
    }

    render() {
        const { data } = this.props
        return (
            <>
                <TouchableOpacity style={{ flexDirection: 'row', borderWidth: 1, borderColor: 'black' }} onPress={this.toggleModalVisiblity}>
                    <Text style={{ flex: 0.25, paddingLeft: 5 }}>{data.title}</Text>
                    <View style={{ width: 2, backgroundColor: 'black' }} />
                    <Text style={{ flex: 0.25, paddingLeft: 5 }}>{data.url}</Text>
                    <View style={{ width: 2, backgroundColor: 'black' }} />
                    <Text style={{ flex: 0.25, paddingLeft: 5 }}>{data.created_at}</Text>
                    <View style={{ width: 2, backgroundColor: 'black' }} />
                    <Text style={{ flex: 0.25, paddingLeft: 5 }}>{data.author}</Text>
                </TouchableOpacity>
                {this.renderModal()}
            </>
        );
    }
}
