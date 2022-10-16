/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const index = StyleSheet.create({
    container: {
        backgroundColor: '#EAEBEF',
    },
});

export const stories = StyleSheet.create({
    container: {
        shadowColor: '#707070',
        shadowOpacity: 0.3,
        shadowOffset: { height: 0 },
        shadowRadius: 3,
    },
    scrollView: {
        height: 107,
        width: '100%',
        backgroundColor: 'white',
    },
});

export const singleStory = StyleSheet.create({
    container: {
        height: 87,
        width: 53,
        marginLeft: 13,
        justifyContent: 'center',
        alignItems: 'center',
    },
    storyOpenedBorder: {
        marginTop: 30,
        height: 54,
        width: 54,
        borderWidth: 1,
        borderColor: '#999EB9',
        borderRadius: 54,
        justifyContent:'center',
        alignItems: 'center',
    },
    storyNotOpenedBorder: {
        marginTop: 30,
        height: 54,
        width: 54,
        borderWidth: 1,
        borderColor: '#2A9D8F',
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
         width: 56,
         height: 34,
         textAlign: 'center',
         marginTop: 5,
    },
});

export const singlePost = StyleSheet.create({
    container: {
        margin: '4%',
        marginTop: '9%',
        marginBottom: '2%',
        width: '92%',
        borderRadius: 10,
        shadowColor: '#707070',
        shadowOpacity: 0.3,
        shadowOffset: { height: 0 },
        shadowRadius: 3,
        backgroundColor: 'white',
        height: 294,
        justifyContent: 'center',
        alignItems: 'center',
    },
    postImage: {
        marginTop: '-8%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: '100%',
        height: 201 ,
        alignItems: 'center',
        justifyContent: 'center',
    },
    postTitle: {
        fontSize: 18,
        fontFamily: 'Avenir Next',
        fontWeight: 'bold',
        lineHeight: 30,
        color:'#048345',
        width: '88%',
        height: 26,
        textAlign: 'left',
        marginTop: '4%',
    },
    postInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '5%',
    },
    buttonDateContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '78%',
        justifyContent: 'flex-start',
    },
    postButtonStyle: {
        width: '45%',
        alignItems: 'center',
        height: '100%',
        borderRadius: 19,
        borderColor: '#0A8754',
        borderWidth: 0.5,
    },
    postButtonTextStyle: {
        color: '#0A8754',
        margin: 1,
    },
    postLikeCount: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 50,
    },
    likeIcon: {
        width: 18.22,
        height: 15.68,
    },
    likeText: {
        color: '#FF6767',
        fontSize: 11,
        fontFamily: 'Avenir Next',
        fontWeight: 'normal',
        lineHeight: 13,
        paddingTop: 3,
        textAlign: 'center',
    },
    postDate: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: '8%',
        width: 85,
    },
    dateIcon: {
        width: 15,
        height: 16,
    },
    dateText: {
        color: '#999EB9',
        fontSize: 12,
        fontFamily: 'Avenir Next',
        fontWeight: 'normal',
        lineHeight: 14,
        paddingTop: 3,
        textAlign: 'left',
    },
});
