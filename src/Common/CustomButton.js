/* eslint-disable prettier/prettier */
import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

const CustomButton = (props) => {
    return (
        <TouchableOpacity style={props.buttonStyle} onPress={props.onPress} >
            <Text style={props.textStyle}>{props.text}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton;
