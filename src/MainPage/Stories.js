/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, useWindowDimensions } from 'react-native';
import { stories } from '../../assets/css/MainPage';
import YemekteNeVar from '../../assets/images/MainPageImages/story_yemektenevar.png';
import Anket from '../../assets/images/MainPageImages/story_anket.png';
import AramizaKatilan from '../../assets/images/MainPageImages/story_aramizakatilan.png';
import DogumGunu from '../../assets/images/MainPageImages/story_dogum.png';
import KadinCalisan from '../../assets/images/MainPageImages/story_kadincalisan.png';
import Konteyner from '../../assets/images/MainPageImages/story_konteyner.png';
import SingleStory from './SingleStory';

// simulation of the fetched data
const storiesJSON = [
    {['yemektenevar1234uuid'] : { // id of the object
        imageSignedUrl: YemekteNeVar, // Normally this should be a url from cloud, I use local images since this is not a commercial project
        storyText : 'Günün Menüsü', // this is also a text from the api
    }},
    {['KadinCalisan1234uuid'] : { // id of the object
        imageSignedUrl: KadinCalisan, // Normally this should be a url from cloud, I use local images since this is not a commercial project
        storyText : 'Bayram Kutlaması', // this is also a text from the api
    }},
    {['Anket1234uuid'] : { // id of the object
        imageSignedUrl: Anket, // Normally this should be a url from cloud, I use local images since this is not a commercial project
        storyText : 'Digitus Anket', // this is also a text from the api
    }},
    {['Konteyner1234uuid'] : { // id of the object
        imageSignedUrl: Konteyner, // Normally this should be a url from cloud, I use local images since this is not a commercial project
        storyText : 'Duyuru ve Genelgeler', // this is also a text from the api
    }},
    {['DogumGunu1234uuid'] : { // id of the object
        imageSignedUrl: DogumGunu, // Normally this should be a url from cloud, I use local images since this is not a commercial project
        storyText : 'Bugün Doğanlar', // this is also a text from the api
    }},
    {['AramizaKatilan1234uuid'] : { // id of the object
        imageSignedUrl: AramizaKatilan, // Normally this should be a url from cloud, I use local images since this is not a commercial project
        storyText : 'Aramıza Katılanlar', // this is also a text from the api
    }},
];


const Stories = () => {
    const layout = useWindowDimensions();
    const [storyData, setStoryData] = useState(null)

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
            setStoryData(storiesJSON);
        };
        fetchData();
    },[])

    return (
        <SafeAreaView style={stories.container} >
            <ScrollView style={{ ...stories.scrollView, width: layout.width}} horizontal={true} showsHorizontalScrollIndicator={false}>
                {storyData ?
                    storyData.map((item, index)=>{
                        let itemUuid = Object.keys(item)[0];
                        return (
                            <SingleStory
                                key = {itemUuid}
                                text={item[itemUuid].storyText} 
                                imageSource={item[itemUuid].imageSignedUrl}/>
                        );}
                    ) : ''
                }
            </ScrollView>
       </SafeAreaView>
    );
};

export default Stories;
