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
});
