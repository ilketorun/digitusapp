/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import InfoPages from './src/InfoPages/InfoPages';
import MainPageIndex from './src/MainPage/MainPageIndex';
import DetailsPageIndex from './src/DetailsPage/DetailsPageIndex';
import CustumNavigationButton from './src/Common/CustomNavButton';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BackButton from './assets/images/DetailPageImages/NavBarLeftButton.png';
import ProfileButton from './assets/images/MainPageImages/RightButton.png';
import SearchIcon from './assets/images/MainPageImages/searchIcon.png';
import OtherPages from './src/OtherPages/OtherPages';
import LogoTitle from './src/Common/LogoTitle';
import CustomTabBar  from './src/CustomTabBar/CustomTabBar';

import HomeIconPassive from './assets/images/TabBarIcons/home.png';
import HomeIconActive from './assets/images/TabBarIcons/home_active.png';
import BookIconActive from './assets/images/TabBarIcons/book-open.png';
import BookIconPassive from './assets/images/TabBarIcons/book_pasive.png';
import UsersIconActive from './assets/images/TabBarIcons/users.png';
import UsersIconPassive from './assets/images/TabBarIcons/users_passive.png';
import BellIconActive from './assets/images/TabBarIcons/bell.png';
import BellIconPassive from './assets/images/TabBarIcons/bell_passive.png';
import MenuIconActive from './assets/images/TabBarIcons/menu.png';
import MenuIconPassive from './assets/images/TabBarIcons/menu_passive.png';


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
                    tabBarIcon: ({ focused, color, size }) => {
                            return (<CustomTabBar focused={focused} icon={!focused ? HomeIconActive : HomeIconPassive} />);
                    },
                    tabBarShowLabel: false,
                })}
            />
            <Tab.Screen
                name="Settings"
                component={OtherPages}
                options={() => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                            return (<CustomTabBar focused={focused} icon={!focused ? BookIconActive : BookIconPassive} />);
                    },
                    tabBarShowLabel: false,
                })}
            />
            <Tab.Screen
                name="Settings1"
                component={OtherPages}
                options={() => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                            return (<CustomTabBar focused={focused} icon={!focused ? UsersIconActive : UsersIconPassive} />);
                    },
                    tabBarShowLabel: false,
                })}
            />
            <Tab.Screen
                name="Settings2"
                component={OtherPages}
                options={() => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                            return (<CustomTabBar focused={focused} icon={!focused ? BellIconActive : BellIconPassive} />);
                    },
                    tabBarShowLabel: false,
                })}
            />
            <Tab.Screen
                name="Settings3"
                component={OtherPages}
                options={() => ({
                    headerShown: false,
                    tabBarIcon: ({ focused, color, size }) => {
                            return (<CustomTabBar focused={focused} icon={!focused ? MenuIconActive : MenuIconPassive} />);
                    },
                    tabBarShowLabel: false,
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
                    headerStyle: { height: 92, shadowColor: '#707070', shadowOpacity: 0.3,  shadowOffset: { height: 0 }, shadowRadius: 3 },
                }}
            />
            <Stack.Screen
                name="DetailsPage"
                component={DetailsPageIndex}
                options={{
                    headerTitle: (props) => <LogoTitle {...props} />,
                    headerLeft: (props) => <CustumNavigationButton {...props} imageSource={BackButton} onPress={onPressBackButton} />,
                    headerStyle: { height: 92, shadowColor: '#707070', shadowOpacity: 0.3,  shadowOffset: { height: 0 }, shadowRadius: 3},
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
