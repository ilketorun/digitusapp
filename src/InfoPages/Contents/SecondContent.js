/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import SecondPageImage from '../../../assets/images/SecondPageImage.png';
import {styles} from '../../../assets/css/InfoPages';

const contextText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const SecondContent = () => {
    const layout = useWindowDimensions();

    return (
        <View style={styles.wrapper}>
            <Image source={SecondPageImage} style={{ width: layout.width }} />
            <Text style={styles.headerText}>Enim ad minim</Text>
            <Text style={styles.contentText}>{contextText}</Text>
        </View>
    );
};

export default SecondContent;

