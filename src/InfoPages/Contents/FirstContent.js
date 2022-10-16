/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image, useWindowDimensions} from 'react-native';
import FirstPageImage from '../../../assets/images/InfoPageImages/FirstPageImage.png';
import {styles} from '../../../assets/css/InfoPages';
import CustomButton from '../../Common/CustomButton';
import { ScrollView } from 'react-native-gesture-handler';


const FirstContent = React.forwardRef((props, ref) => {
    const layout = useWindowDimensions();
    const buttonText = 'ileri';
    const contextText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    const onButtonPress = () => {
        ref.current.scrollBy(1);
    };

    return (
        <ScrollView style={styles.scrollViewWrapper} showsVerticalScrollIndicator={false}>
            <View style={styles.wrapper}>
                <Image source={FirstPageImage} style={{ width: layout.width }}/>
                <Text style={styles.headerText}>Enim ad minim</Text>
                <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                    <Text style={styles.contentText}>{contextText}</Text>
                    <CustomButton
                        onPress={onButtonPress}
                        text={buttonText}
                        textStyle={styles.buttonTextStyle}
                        buttonStyle={styles.buttonStyle}
                    />
                </ScrollView>
            </View>
        </ScrollView>
    );
});

export default FirstContent;
