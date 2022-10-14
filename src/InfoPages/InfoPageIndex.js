/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import * as React from 'react';
import FirstContent from './Contents/FirstContent';
import SecondContent from './Contents/SecondContent';
import ThirdContent from './Contents/ThirdContent';
import { SwiperStyles } from '../../assets/css/InfoPages';
import Swiper from 'react-native-swiper';


const InfoPageIndex = (props) => {
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
        setIndex(props.index);
    }, [props.index]);

    return (
        <Swiper style={SwiperStyles.wrapper} showsButtons={false}>
            <FirstContent />
            <SecondContent />
            <ThirdContent />
        </Swiper>
    )
};


export default InfoPageIndex;






