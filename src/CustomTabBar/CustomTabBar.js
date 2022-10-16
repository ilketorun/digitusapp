/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Image, useWindowDimensions, View, Dimensions } from 'react-native';
import { styles } from '../../assets/css/CustomTabBar'
import {} from 'react-native';

const CustomTabBar = (props) => {
    const layout = useWindowDimensions();
    let initialWidth = (layout.width < layout.height) ? layout.width / 5 : layout.height / 5
    const [currentWidth, setCurrentWidth] = useState(initialWidth);
    let currentStyle = props.focused ? styles.focusedWrapper : styles.notFocusedWrapper;

    useEffect(()=>{
        Dimensions.addEventListener('change', ({window:{width,height}})=>{
            if (width < height) {
                setCurrentWidth(width / 5);
            } else {
                setCurrentWidth(height / 5);
            }
        });
    },[]);

    return (
        <View style={{...currentStyle, width: currentWidth }}>
            <Image
                style={{ width: 20, height: 20 }}
                source={props.icon}
            />
        </View>
    );
};

export default CustomTabBar;
