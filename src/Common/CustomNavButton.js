/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { styles } from '../../assets/css/Common';

const CustumNavigationButton = (props) => {
    return (
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
            <Image style={{ width: 17.5, height: 17.5 }} source={props.imageSource}/>
        </TouchableOpacity>
    );
};

export default CustumNavigationButton;
