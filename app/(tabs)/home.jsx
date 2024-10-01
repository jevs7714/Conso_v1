import { View, Text, FlatList, RefreshControl } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native';
import { icons, images } from '../../constants';
import SearchInput from '../../components/SearchInput';
import Trending from '../../components/Trending';
import EmptyState from '../../components/EmptyState';
import VideoCard from '../../components/VideoCard';
import { TouchableOpacity } from 'react-native';


const DATA = [
  {
    id: 1,
    title: "Buddy",
    image:  images.buddy,
    creator: "Erika",
  },
  {
    id: 2,
    title: "Galaysia",
    image:  images.choi2,
    creator: "Choi2x",

  },
  {
    id: 3,
    title: "NGL FR FR",
    image:  images.clyde,
    creator: "Clyde",
  },
];



const Item = ({title, image, creator}) => (
  <TouchableOpacity className = "flex-col items-center mb-7 bg-blue-800">
         <View className = "w-full h-40 rounded-xl mt-5 relative justify-center items-center">
            <Image 
                source={image}
                className = "w-full h-full mb-7"
                resizeMode="cover"
            />
        </View>
        <View className = "flex-row gap-3 items-start ml-0.5">
            <View className = "justify-center items-center flex-row flex-1">
                <View className = "w-[46px] h-[46px] rounded-lg border border-white justify-center items-center p-0.5 mt-7">
                    <Image source={image}
                        className = "w-full h-full rounded-lg "
                        resizeMode="stretch"
                    />
                </View>
                <View className = "justify-center flex-1 ml-3 gap-y-1 mt-1">  
                    <Text className = "text-white font-pextrabold text-2xl" numberOfLines={1}> 
                        {title}
                    </Text>
                    <Text className = "text-xl text-white font-pregular " numberOfLines={1}>
                        {creator}
                    </Text>
                </View>
            </View>
        </View>
       
    </TouchableOpacity>
);




const Home = () => {

  const [refreshing, setrefreshing] = useState(false)

  const onRefresh = async () => {
    setrefreshing(true);
    //re call videos -> if any new videos appeard
    setrefreshing(false);
  }

  return (
    <SafeAreaView className = "bg-secondary-500  h-full">
    <FlatList
      data={DATA}
      renderItem={({item}) => <Item title={item.title} image={item.image} creator={item.creator}/>}
      

      ListHeaderComponent={() => (
        <View className = "my-6 px-4 space-y-6">
          <View className = "justify-between items-start flex-row mb-6">
            <View>
              <Text className = "font-psemibold text-sm text-white">Welcome Back And Be Inspired</Text>
              <Text className = "text-2xl font-pregular text-white">Jevs</Text>
            </View>
            <TouchableOpacity className = "mt-1.5">
              <Image 
                source={icons.profile}
                className = "w-9 h-10"
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
          <SearchInput />

          <View className = "w-full flex-1 pt-5 pb-7">
            <Text className = "text-white text-lg font-psemibold mb-3">Popular Apps</Text>
            <Trending 
              posts = {[{ title: "Don's Kitchen", appPic: images.don}, 
                {title: "Food Delivery", appPic: images.nano }, 
                {title: "Instacle", appPic: images.patrick},
                {title: "Jam's Restaurant", appPic: images.jam},] ?? []}
            />
          </View>
          <Text className = "text-white text-lg font-psemibold mb-3">New Release App</Text>
        </View>
      )}

      ListEmptyComponent={() => (
        <EmptyState 
          title = "No Apps Found"
          subtitle = "Be the firt one to publish app"
        />
      )}
      refreshControl={<RefreshControl 
        refreshing = {refreshing} onRefresh={onRefresh}
      />}
    />
  </SafeAreaView>
  )
}

export default Home