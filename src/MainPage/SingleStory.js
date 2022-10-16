/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity} from 'react-native';
import { singleStory } from '../../assets/css/MainPage'

const SingleStory = (props) => {
    const [isOpened,setIsOpened] = useState(false);

    const onPress = () => {
        setIsOpened(true);
        alert('Opens the story');
    };

    return (
        <TouchableOpacity style={singleStory.container} onPress={onPress} >
            <View style={isOpened ? singleStory.storyOpenedBorder : singleStory.storyNotOpenedBorder}>
                <Image
                    source={props.imageSource}
                    style={singleStory.storyImage}
                />
            </View>
            <Text style={singleStory.storyText}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default SingleStory;
