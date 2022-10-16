/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Image } from 'react-native';
import DigitusLogoForNavTitle from '../../assets/images/MainPageImages/DigitusLogoForNavTitle.png'

const LogoTitle = () => {
    return (
        <Image
            style={{ width: 115, height: 45 }}
            source={DigitusLogoForNavTitle}
        />
    );
};

export default LogoTitle;

