/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, SafeAreaView, ScrollView, useWindowDimensions } from 'react-native';
import { stories } from '../../assets/css/MainPage'


const Stories = () => {
    const layout = useWindowDimensions();

    return (
        <SafeAreaView style={stories.container} >
            <ScrollView style={{ ...stories.scrollView, width: layout.width}}>
                <Text style={stories.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </ScrollView>
        </SafeAreaView>
    );
}


export default Stories;
