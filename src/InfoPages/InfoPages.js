/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    Button,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import InfoPageIndex from './InfoPageIndex';
import DigitusLogo from '../../assets/images/DigitusLogo.png';
import {styles} from '../../assets/css/InfoPages';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
* LTI update could not be added via codemod */

const InfoPages = () => {

    return (
        <View style={styles.infoPagesWrapper}>
            <Image source={DigitusLogo} style={styles.logoStyle}/>
            <InfoPageIndex />
        </View>
    );
};

export default InfoPages;


// function HomeScreen({ navigation }) {
//     return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//         title="Go to Profile"
//         onPress={() => navigation.navigate('InfoPages')}
//         />
//     </View>
//     );
// }

// function NotificationsScreen({ navigation }) {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//             <Button
//             title="Go to Settings"
//             onPress={() => navigation.navigate('Settings')}
//             />
//             <Button title="Go back" onPress={() => navigation.goBack()} />
//         </View>
//     );
// }

// const Stack = createStackNavigator();

// function MyStack() {
//     return (
//         <Stack.Navigator>
//             <Stack.Screen name="InfoPages" component={InfoPages} />
//             <Stack.Screen name="Home" component={HomeScreen} />
//             <Stack.Screen name="Notifications" component={NotificationsScreen} />
//         </Stack.Navigator>
//     );
// }


// export default function App() {
//   return (
//     <NavigationContainer>
//       <MyStack />
//     </NavigationContainer>
//   );
// }
