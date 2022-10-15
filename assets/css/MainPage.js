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
});

export const singleStory = StyleSheet.create({
    container: {
        height: 87,
        width: 53,
        marginLeft: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    storyBorder: {
        marginTop: 30,
        height: 54,
        width: 54,
        borderWidth: 1,
        borderColor: '#999EB9',
        borderRadius: 54,
        justifyContent:'center',
        alignItems: 'center',
    },
    storyImage: {
        width: 47,
        height: 47 ,
        alignItems: 'center',
        justifyContent: 'center',
    },
    storyText: { 
        fontSize:11,
        fontFamily: 'Avenir Next',
        lineHeight: 13,
        color:'#999EB9',
         width: 50,
         height: 34,
         textAlign: 'center',
         marginTop: 5,
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
