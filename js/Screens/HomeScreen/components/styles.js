import { StyleSheet, Dimensions } from 'react-native';
import { DP } from '../../../services/Dimen';
const windowWidth = Dimensions.get('window').width;

export const Styles = StyleSheet.create({
    fill: {
        flex: 1,
        backgroundColor:'rgb(247, 247, 247)'
    },
    headingContainer: {
        paddingTop: DP._24,
        paddingHorizontal: DP._16,
        paddingBottom: DP._8
    },
    headingText: {
        fontWeight: 'bold',
        fontSize: DP._16
    },
    card: {
        marginTop: DP._4,
        paddingTop: DP._12,
        marginBottom: DP._16,
        backgroundColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        
        elevation: DP._5,
    },
    thumbnailContainer: {
        borderColor: 'green',
        borderWidth: DP._2,
        height: DP._50,
        width: DP._50,
        borderRadius: DP._25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumbnail: {
        backgroundColor: "rgb(232, 233, 239)",
        height: DP._44,
        width: DP._44,
        borderRadius: DP._22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumbnailAndNameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: DP._16
    },
    nameContainer: {
        paddingLeft: DP._8
    },
    mainImage: {
        height: DP._200,
        width: windowWidth,
        marginTop: DP._16
    },
    contentContainer: {
        padding: DP._16
    },
    contentHeading: {
        fontSize: DP._16,
        fontWeight: 'bold'
    }
});