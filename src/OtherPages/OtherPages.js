/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native'

const OtherPages = () => {
    const navigation = useNavigation();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Other Pages!</Text>
            <Button title='back' onPress={() => navigation.goBack()}></Button>
        </View>
    );
};

export default OtherPages;
