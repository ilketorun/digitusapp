/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    focusedWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -16,
        height: 55,
        backgroundColor: '#048345',
    },
    notFocusedWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: -16,
        justifyContent: 'center',
        height: 55,
        backgroundColor: 'white',
    },
});
