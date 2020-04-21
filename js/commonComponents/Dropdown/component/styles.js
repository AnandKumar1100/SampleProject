import { StyleSheet, Dimensions } from 'react-native';
import { DP } from '../../../services/Dimen';
const windowWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
    fill: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modalBackground: {
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        width: '100%'
    },
    dropdownContainer: {
        backgroundColor: 'white',
        paddingHorizontal: DP._24
    },
    dropdownTitle: {
        fontWeight: 'bold',
        fontSize: DP._16,
        paddingVertical: DP._24
    },
    dropdownItem: {
        marginBottom: DP._24
    }
});