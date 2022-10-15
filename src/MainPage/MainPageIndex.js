/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import CustomButton from '../Common/CustomButton';
import Posts from './Posts';
import Stories from './Stories';
import { index } from '../../assets/css/MainPage'

const MainPageIndex = () => {
    const navigation = useNavigation();
    const buttonText = 'Giriş';

    const onButtonPress = () => {
        navigation.navigate('DetailsPage');
    };

    return (
        <View style={index.container}>
            <Stories />
            {/* <CustomButton
                onPress={onButtonPress}
                text={buttonText}
                // textStyle={styles.buttonTextStyle}
                // buttonStyle={styles.buttonStyle}
            /> */}
            <Posts />
        </View>
    );
};

export default MainPageIndex;
