/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import InfoPages from './src/InfoPages/InfoPages';
import MainPageIndex from './src/MainPage/MainPageIndex';
import DetailsPageIndex from './src/DetailsPage/DetailsPageIndex';
import { Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LogoTitle() {
    return (
        <Image
            style={{ width: 115, height: 60 }}
            source={require('./assets/images/DigitusLogoForNavTitle.png')}
        />
    );
}

const Stack = createStackNavigator();

function MyStack() {
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
                options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
            />
            <Stack.Screen
                name="DetailsPage"
                component={DetailsPageIndex}
                options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
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