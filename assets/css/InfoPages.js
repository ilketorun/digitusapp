/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    headerText: {
        marginTop: 30,
        color: '#0A8754',
        fontSize: 22,
        lineHeight: 30,
        fontWeight: 'bold',
        fontFamily: 'Avenir Next',
    },
    contentText: {
        fontSize: 14,
        lineHeight: 22,
        color: '#141D45',
        fontWeight: 'normal',
        fontFamily: 'Avenir Next',
        textAlign: 'center',
        width: 265,
        height: 89,
        overflow: 'hidden',
    },
    infoPagesWrapper:{
        flex: 1,
        backgroundColor: 'white',
    },
    textStyle: {
        marginBottom: 60,
    },
    logoStyle: {
        marginTop: 35,
        width: 149,
        height: 78,
        alignSelf: 'center',
    },
    buttonStyle: {
        marginTop: 35,
        color: 'black',
        backgroundColor: '#64B48E',
        alignSelf: 'center',
        borderRadius: 18,
        height: 36,
        width: 265,
    },
    buttonTextStyle: {
        lineHeight: 25,
        textAlign: 'center',
        fontWeight: '700',
        color: 'white',
        fontSize: 18,
        marginTop: 5,
        height: 34,
        alignItems: 'center',
        alignContent: 'center',
    },
    tabBarStyle: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        width: 41,
        height: 9,
        backgroundColor: 'gray',
    },
});
