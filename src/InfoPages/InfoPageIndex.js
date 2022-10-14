/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import FirstContent from './Contents/FirstContent';
import SecondContent from './Contents/SecondContent';
import ThirdContent from './Contents/ThirdContent';
import { SwiperStyles } from '../../assets/css/InfoPages';
import Swiper from 'react-native-swiper';
import {View} from 'react-native'


const InfoPageIndex = (props) => {
    const swiper = React.useRef(null);

    return (
        <Swiper
            ref={swiper}
            style={SwiperStyles.wrapper}
            containerStyle={SwiperStyles.containerStyle}
            showsButtons={false}
            dot={<View style={{backgroundColor:'#EAECF3', width: 9, height: 9, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            activeDot={<View style={{backgroundColor: '#B5B0B5', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
            onIndexChanged={props.onIndexChanged}
        >
            <FirstContent ref={swiper}/>
            <SecondContent ref={swiper}/>
            <ThirdContent ref={swiper}/>
        </Swiper>
    )
};


export default InfoPageIndex;






