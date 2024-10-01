import { View, Text, FlatList } from 'react-native'
import React from 'react'
import * as Animatable from 'react-native-animatable'
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native';





const Item = ({title}) => (

  <TouchableOpacity className = "mx-7 justify-center items-center bg-blue-800 w-[250] h-[200]">
    <Text className = "text-white text-2xl font-pextrabold">{title}</Text>

  </TouchableOpacity>
);



const Topics = ({posts}) => {

  return (
    <FlatList 
      data={posts}
      renderItem={({item}) => <Item title={item.title}/>}
      keyExtractor={item => item.id}

      horizontal  
    />
  )
}

export default Topics