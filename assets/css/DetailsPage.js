/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native'

export const index = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
    },
    image: {},
    detailsBottom: {
        width: '100%',
        marginTop: -18,
        backgroundColor: 'white',
        borderTopLeftRadius: 18,
        borderTopRightRadius: 18,
    },
    detailsWrapper: {
        width: '80%',
        marginLeft: '10%',
        marginRight: '10%',
        marginTop: '8%',
        marginBottom: '15%',

    },
    detailsTitle: {
        color: '#0A8754',
        fontSize: 22,
        fontFamily: 'Avenir Next',
        fontWeight: 'bold',
        lineHeight: 30,
        height: 32,
        textAlign: 'left',
    },
    detailsButton: {
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 19,
        borderRadius: 19,
        marginTop: '5%',
        marginBottom: '6%',
        borderColor: '#0A8754',
        borderWidth: 0.5,
    },
    detailsButtonText: {
        color: '#0A8754',
        margin: 1,
    },
    detailsTextScrollView: {
        height: 432,
    },
    detailsText: {
        color: '#292929',
        fontSize: 13,
        fontFamily: 'Helvetica Neue',
        fontWeight: 'normal',
        lineHeight: 20,
        textAlign: 'left',
    },
});
