/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image, View } from 'react-native';
import { styles } from '../../assets/css/CustomTabBar'

const CustomTabBar = (props) => {
    return (
        <View style={props.focused ? styles.focusedWrapper : styles.notFocusedWrapper }>
            <Image
                style={{ width: 20, height: 20 }}
                source={props.icon}
            />
        </View>
    );
};

export default CustomTabBar;
