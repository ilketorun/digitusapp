/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Image} from 'react-native';
import { singleStory } from '../../assets/css/MainPage'

const SingleStory = (props) => {
    return (
        <View style={singleStory.container}>
            <View style={singleStory.storyBorder}>
                <Image
                    source={props.imageSource}
                    style={singleStory.storyImage}
                />
            </View>
            <Text style={singleStory.storyText}>{props.text}</Text>
        </View>
    );
};

export default SingleStory;
