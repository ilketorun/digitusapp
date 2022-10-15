/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Image } from 'react-native';
import InfoPageIndex from './InfoPageIndex';
import DigitusLogo from '../../assets/images/InfoPageImages/DigitusLogo.png';
import { styles } from '../../assets/css/InfoPages';

const InfoPages = () => {
    return (
        <View style={styles.infoPagesWrapper}>
            <Image source={DigitusLogo} style={styles.logoStyle} />
            <InfoPageIndex />
        </View>
    );
};

export default InfoPages;

