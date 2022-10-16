/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native'

const OtherPages = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 50 }}>Another Page!</Text>
            <Button title='Go to Main Page' onPress={() => navigation.goBack()} />
        </View>
    );
};

export default OtherPages;
