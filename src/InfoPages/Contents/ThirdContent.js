/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import ThirdPageImage from '../../../assets/images/InfoPageImages/ThirdPageImage.png';
import {styles} from '../../../assets/css/InfoPages';
import CustomButton from '../../Common/CustomButton';
import { useNavigation } from '@react-navigation/native';

const ThirdContent = React.forwardRef((props, ref) => {
    const layout = useWindowDimensions();
    const navigation = useNavigation();
    const buttonText = 'Giriş';
    const contextText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    const onButtonPress = () => {
        navigation.navigate('MainPage');
    };

    return (
        <View style={styles.wrapper}>
            <Image source={ThirdPageImage} style={{ width: layout.width }}/>
            <Text style={styles.headerText}>Enim ad minim</Text>
            <Text style={styles.contentText}>{contextText}</Text>
            <CustomButton
                onPress={onButtonPress}
                text={buttonText}
                textStyle={styles.buttonTextStyle}
                buttonStyle={styles.buttonStyle}
            />
        </View>
    );
});

export default ThirdContent;