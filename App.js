/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import InfoPages from './src/InfoPages/InfoPages';
import MainPageIndex from './src/MainPage/MainPageIndex';
import DetailsPageIndex from './src/DetailsPage/DetailsPageIndex';
import CustumNavigationButton from './src/Common/CustomNavButton';
import { Image } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BackButton from './assets/images/DetailPageImages/NavBarLeftButton.png';
import ProfileButton from './assets/images/MainPageImages/RightButton.png';
import SearchIcon from './assets/images/MainPageImages/searchIcon.png';

function LogoTitle() {
    return (
        <Image
            style={{ width: 115, height: 60 }}
            source={require('./assets/images/MainPageImages/DigitusLogoForNavTitle.png')}
        />
    );
}

const Stack = createStackNavigator();

function MyStack() {
    const navigation = useNavigation();

    const onPressProfileButton = () => {
        alert('This will be a new page');
    };
    const onPressSeachIcon = () => {
        alert('This open a search reaction');
    };
    const onPressBackButton = () => {
        navigation.goBack();
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="InfoPages"
                component={InfoPages}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="MainPage"
                component={MainPageIndex}
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerRight: (props) => <CustumNavigationButton {...props} imageSource={ProfileButton} onPress={onPressProfileButton} />,
                    headerLeft: (props) => <CustumNavigationButton {...props} imageSource={SearchIcon} onPress={onPressSeachIcon} />,
                    headerStyle: { height: 80 },
                }}

            />
            <Stack.Screen
                name="DetailsPage"
                component={DetailsPageIndex}
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerLeft: (props) => <CustumNavigationButton {...props} imageSource={BackButton} onPress={onPressBackButton} />,
                    headerStyle: { height: 80 },
                }}
            />
        </Stack.Navigator>
    );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}