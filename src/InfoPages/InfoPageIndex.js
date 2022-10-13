/* eslint-disable prettier/prettier */
import * as React from 'react';
import { useWindowDimensions, StyleSheet } from 'react-native';
import { TabView } from 'react-native-tab-view';
import FirstContent from './FirstContent';
import SecondContent from './SecondContent';
import ThirdContent from './ThirdContent';

const renderScene = ({ route, jumpTo }) => {
    switch (route.key) {
        case 'first':
            return <FirstContent jumpTo={jumpTo} />;
        case 'second':
            return <SecondContent jumpTo={jumpTo} />;
        case 'third':
            return <ThirdContent jumpTo={jumpTo} />;
    }
};

const InfoPageIndex = () => {
    const layout = useWindowDimensions();

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
        { key: 'third', title: 'Third' },
    ]);

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            tabBarPosition={'bottom'}
        />
    );
};

export default InfoPageIndex;

