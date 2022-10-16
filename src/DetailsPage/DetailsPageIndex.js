/* eslint-disable prettier/prettier */
import React from 'react';
import {View, ScrollView, Image, Text} from 'react-native';
import CustomButton from '../Common/CustomButton';
import { index } from '../../assets/css/DetailsPage'
import { useRoute } from '@react-navigation/native';

const DetailsPageIndex = () => {
    const route = useRoute();
    const { title, detailsPageImage, detailsPageText } = route.params;

    const onButtonPress = () => {};

    return (
        <ScrollView style={index.container} showsVerticalScrollIndicator={false}>
            <Image
                source={detailsPageImage}
                style={index.image}
            />
            <View style={index.detailsBottom}  >
                <View style={index.detailsWrapper} >
                    <Text style={index.detailsTitle}>{title}</Text>
                    <CustomButton
                        onPress={onButtonPress}
                        text={'Duis aute'}
                        textStyle={index.detailsButtonText}
                        buttonStyle={index.detailsButton}
                    />
                    <ScrollView style={index.detailsTextScrollView} showsVerticalScrollIndicator={false}>
                        <Text style={index.detailsText}>{detailsPageText}</Text>
                    </ScrollView>
                </View>
            </View>
        </ScrollView>
    );
};

export default DetailsPageIndex;
