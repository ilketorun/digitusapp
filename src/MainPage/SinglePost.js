/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View, Image} from 'react-native';
import { singlePost } from '../../assets/css/MainPage';
import LikeIcon from '../../assets/images/MainPageImages/icon_like.png';
import CalendarIcon from '../../assets/images/MainPageImages/icon_calendar.png';
import CustomButton from '../Common/CustomButton';
import { useNavigation } from '@react-navigation/native';

const SinglePost = (props) => {
    const navigation = useNavigation();

    const onButtonPress = () => {
        navigation.navigate('DetailsPage');
    };

    return (
        <View style={singlePost.container}>
            <Image
                source={props.imageSource}
                style={singlePost.postImage}
            />
            <Text style={singlePost.postTitle}>{props.title}</Text>
            <View style={singlePost.postInfoContainer} >
                <View style={singlePost.buttonDateContainer}>
                    <CustomButton
                        onPress={onButtonPress}
                        text={'Duis aute'}
                        textStyle={singlePost.postButtonTextStyle}
                        buttonStyle={singlePost.postButtonStyle}
                    />
                    <View style={singlePost.postDate} >
                        <Image
                            source={CalendarIcon}
                            style={singlePost.dateIcon}
                        />
                        <Text style={singlePost.dateText}>{props.date}</Text>
                    </View>
                </View>
                <View style={singlePost.postLikeCount}>
                    <Text style={singlePost.likeText}>{props.likeCounter}</Text>
                    <Image
                        source={LikeIcon}
                        style={singlePost.likeIcon}
                    />
                </View>
            </View>
        </View>
    );
};

export default SinglePost;
