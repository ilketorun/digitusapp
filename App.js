/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import InfoPages from './src/InfoPages/InfoPages';
import MainPageIndex from './src/MainPage/MainPageIndex';
import DetailsPageIndex from './src/DetailsPage/DetailsPageIndex';
import CustumNavigationButton from './src/Common/CustomNavButton';
import { Image, View, Text, Button } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BackButton from './assets/images/DetailPageImages/NavBarLeftButton.png';
import ProfileButton from './assets/images/MainPageImages/RightButton.png';
import SearchIcon from './assets/images/MainPageImages/searchIcon.png';
import OtherPages from './src/OtherPages/OtherPages';
import LogoTitle from './src/Common/LogoTitle';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function InfoStack () {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="InfoPages"
                component={InfoPages}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="AppPages"
                component={MainTab}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
}

function MainTab () {
    return (
        <Tab.Navigator >
            <Tab.Screen
                name="Home"
                component={MainStack}
                options={() => ({
                    headerShown: false,
                })}
            />
            <Tab.Screen
                name="Settings"
                component={OtherPages}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Tab.Navigator>
    );
}

function MainStack() {
    const navigation = useNavigation();

    const onPressProfileButton = () => {
        alert('Opens the Profile Page');
    };
    const onPressSeachIcon = () => {
        alert('Opens the search bar');
    };
    const onPressBackButton = () => {
        navigation.navigate('MainPage');
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MainPage"
                component={MainPageIndex}
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerRight: (props) => <CustumNavigationButton {...props} imageSource={ProfileButton} onPress={onPressProfileButton} />,
                    headerLeft: (props) => <CustumNavigationButton {...props} imageSource={SearchIcon} onPress={onPressSeachIcon} />,
                    headerStyle: { height: 80, shadowColor: '#707070', shadowOpacity: 0.3,  shadowOffset: { height: 0 }, shadowRadius: 3 },
                }}
            />
            <Stack.Screen
                name="DetailsPage"
                component={DetailsPageIndex}
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerLeft: (props) => <CustumNavigationButton {...props} imageSource={BackButton} onPress={onPressBackButton} />,
                    headerStyle: { height: 80, shadowColor: '#707070', shadowOpacity: 0.3,  shadowOffset: { height: 0 }, shadowRadius: 3},
                }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
  return (
    <NavigationContainer>
        <InfoStack />
    </NavigationContainer>
  );
}
