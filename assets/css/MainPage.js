/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const index = StyleSheet.create({
    container: {
        backgroundColor: '#EAEBEF',
    },
});

export const stories = StyleSheet.create({
    container: {
        shadowColor: '#707070', shadowOpacity: 0.3,  shadowOffset: { height: 0 }, shadowRadius: 3
    },
    scrollView: {
        height: 107,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 42,
    },
});

export const posts = StyleSheet.create({
    container: {
        marginLeft: '4%',
        marginTop: '4%',
        marginRight: '4%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        shadowColor: '#707070',
        shadowOpacity: 0.3,
        shadowOffset: { height: 0 },
        shadowRadius: 3,
    },
    scrollView: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 42,
    },
});
