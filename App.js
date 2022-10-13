/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import InfoPageIndex from './src/InfoPages/InfoPageIndex';
import MainPageIndex from './src/MainPage/MainPageIndex';
import DigitusLogo from './assets/images/DigitusLogo.png';
import {styles} from './assets/css/AppCss';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const App = () => {
    const isDarkMode = useColorScheme() === 'dark';
    const [isLoggedIn,setIsLoggedIn] = useState(false)

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    if(isLoggedIn) {
        return (
            <View style={styles.wrapper}>
                <MainPageIndex />
                <Text style={styles.textStyle}>asds</Text>
            </View>
        )
    } else {
        return (
            <View style={styles.wrapper}>
                <Image source={DigitusLogo} style={styles.logoStyle}/>
                <InfoPageIndex />
                <Text style={styles.textStyle}>asds</Text>
            </View>
        );
    }
};

export default App;
