/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import Posts from './Posts';
import Stories from './Stories';
import { index } from '../../assets/css/MainPage'
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const MainPageIndex = () => {
    return (
         <ScrollView style={index.container} showsVerticalScrollIndicator={false}>
            <Stories />
            <Posts />
        </ScrollView>
    );
};

export default MainPageIndex;
