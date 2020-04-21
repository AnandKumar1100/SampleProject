import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
    fill: {
        flex: 1,
        backgroundColor:'rgb(247, 247, 247)'
    },
    card: {
        marginTop: 4,
        paddingTop: 12,
        marginBottom: 16,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: 5,
    }
});