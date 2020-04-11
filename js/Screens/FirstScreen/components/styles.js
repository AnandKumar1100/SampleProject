import {StyleSheet} from 'react-native';

export const Styles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    cellText: { 
        flex: 0.25,
        textAlign: 'center'
    },
    flexDirection_row: {
        flexDirection: 'row'
    },
    emptyDataContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyDataText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    headerBtnContainer: {
        height: 50,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginBottom: 15
    },
    searchBtnContainer: {
        flexDirection: 'row',
        flex: 0.50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        flex: 1
    },
    modalParent: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.85)',
        justifyContent: 'center'
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20
    },
    closeBtn: {
        alignSelf: 'center',
        marginTop: 20
    },
    closeBtnText: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    contentHeaderStyle: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'black'
    },
    cellStyle: {
        flex: 0.25,
        paddingLeft: 5
    },
    verticalSeparator: {
        width: 2,
        backgroundColor: 'black'
    }
});