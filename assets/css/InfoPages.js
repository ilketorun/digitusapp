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
        marginBottom: 35,
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

export const SwipeBarStyles = StyleSheet.create({
    wrapper: {
        width: 41,
        height: 9,
        backgroundColor: 'black',
        alignSelf: 'center',
        display: 'flex',
        alignContent: 'space-around',
    },
    reactangles: {
        marginLeft: 2,
        height: 9,
        width: 9,
        borderRadius:1,
        backgroundColor: 'green',
        zIndex: 1,
    },
    reactangle1: {
        marginLeft: 5,
        height: 9,
        width: 9,
        borderRadius:1,
        backgroundColor: 'blue',
        zIndex: 1,
    },
    reactangle2: {
        height: 9,
        width: 9,
        borderRadius:1,
        backgroundColor: 'purple',
        zIndex: 1,
    },
});

export const SwiperStyles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  })

