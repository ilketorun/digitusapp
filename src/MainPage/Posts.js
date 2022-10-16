/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import PostFabrika from '../../assets/images/MainPageImages/post_fabrika.png'
import PostKadinCalisan from '../../assets/images/MainPageImages/post_kadincalisan.png'
import SinglePost from './SinglePost';

// simulation of the fetched data
const postsJSON = [
    {['PostKadinCalisan1234uuid'] : { // id of the object
        imageSignedUrl: PostKadinCalisan, // Normally this should be a url from cloud, I use local images since this is not a commercial project
        title : 'Enim ad minim', // this is also a text from the api
        date: '21.05.2020',
        likeCounter: 1058,
    }},
    {['PostFabrika1234uuid'] : { // id of the object
        imageSignedUrl: PostFabrika, // Normally this should be a url from cloud, I use local images since this is not a commercial project
        title : 'Lorem ipsum sit', // this is also a text from the api
        date: '22.0.2021',
        likeCounter: 2005,
    }},
];

const Posts = () => {
    const [postData, setPostData] = useState(null);

    useEffect(()=>{
        const fetchData = async () => {
            // normally we should have fetched data i.e.
            // fetch("someURL", {
            //     method: 'GET',
            //     headers: {
            //         'Content-type': 'application/json'
            //     }
            // })
            // .then((response) => response.json())
            // .then((json) => setStoryData(storiesJSON) /* or do other things*/)
            // .catch((err) => console.log(err) /* or do other things*/ );
            setPostData(postsJSON);
        };
        fetchData();
    },[]);

    return (
            <View>
                {postData ?
                    postData.map((item, index)=>{
                        let itemUuid = Object.keys(item)[0];
                        return (
                            <SinglePost
                                imageSource={item[itemUuid].imageSignedUrl} 
                                title={item[itemUuid].title}
                                date={item[itemUuid].date}
                                likeCounter={item[itemUuid].likeCounter}
                            />
                        );}
                    ) : ''
                }
            </View>
    );
};

export default Posts;
