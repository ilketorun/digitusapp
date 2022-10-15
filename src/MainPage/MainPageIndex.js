/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View} from 'react-native';
import CustomButton from '../Common/CustomButton';

const MainPageIndex = () => {
    const navigation = useNavigation();
    const buttonText = 'Giriş';

    const onButtonPress = () => {
        navigation.navigate('DetailsPage');
    };

    return (
        <View>
            <CustomButton
                onPress={onButtonPress}
                text={buttonText}
                // textStyle={styles.buttonTextStyle}
                // buttonStyle={styles.buttonStyle}
            />
        </View>
    );
};

export default MainPageIndex;
