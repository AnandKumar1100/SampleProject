import { StyleSheet, Dimensions } from 'react-native';
import { DP } from '../../../services/Dimen';
const windowWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
    fill: {
        flex: 1,
        backgroundColor:'white'
    },
    searchContainer: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(216, 216, 216)',
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    searchInnerContainer: {
        height: 40,
        backgroundColor: 'rgb(237, 237, 237)',
        borderRadius: 8,
        justifyContent: 'center'
    },
    searchIconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    padding_1: {
        paddingTop: 1
    },
    searchText: {
        color: 'rgb(117, 118, 124)',
        paddingLeft: 8
    },
    voteNowCard: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: DP._5,
        backgroundColor: 'rgb(237, 237, 237)',
        width: windowWidth / 2.3,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginLeft: 16,
        marginTop: 16
    },
    pollText: {
        color: '#379aff',
        fontSize: 32,
        fontStyle: 'italic',
        fontWeight: 'bold',
        paddingBottom: 2
    },
    voteNowTextContainer: {
        backgroundColor: 'white',
        padding: 4
    },
    voteNowText: {
        fontSize: 12,
        color: '#379aff',
        fontWeight: 'bold'
    },
    categoriesContainer: {
        paddingTop: 36
    },
    categoriesText: {
        color: '#4d4e51',
        fontSize: 16,
        paddingLeft: 16
    },
    horizontalLine: {
        height: 1,
        width: 20,
        backgroundColor: '#4d4e51',
        marginTop: 2,
        marginLeft: 16
    },
    categoriesListContainer: {
        paddingTop: 16,
        paddingLeft: 16
    },
    suggestTopicsContainer: {
        paddingTop: 36,
        paddingLeft: 8,
        paddingRight: 8
    },
    suggestTopicsText: {
        color: '#4d4e51',
        fontSize: 16,
        paddingLeft: 8
    },
    suggestTopicsHorizontalLine: {
        height: 1,
        width: 20,
        backgroundColor: '#4d4e51',
        marginTop: 2,
        marginLeft: 8
    },
    suggestTopicsList: {
        paddingTop: 16,
        paddingLeft: 8
    },
    topicsContainer: {
        width: (windowWidth - 48) / 3,
        borderWidth: 0.5,
        borderColor: '#379aff',
        backgroundColor: 'white',
        height: 140,
        marginRight: 8,
        marginBottom: 16,
        borderRadius: 4,
        padding: 8,
        shadowColor: "#379aff",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1.0,
        
        elevation: 5
    },
    topicsTextContainer: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    topicsText: {
        fontWeight: 'bold',
        fontSize: 12
    },
    eachCategoriesContainer: {
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 24
    }
});