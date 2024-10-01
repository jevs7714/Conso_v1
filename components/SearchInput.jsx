import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native'
import { icons } from '../constants'


const SearchInput = ({title, value, placeholder, handleChangeText, 
    otherStyles, ...props}) => {

        const [showPassword, setshowPassword] = useState(false)
  return (

    <View className ="border-2 border-black-200 w-full h-16 px-4 bg-gray-300
    rounded-2xl focus:border-secondary-500 items-center flex-row space-x-4">
        <TextInput 
        className = "text-base mt-0.5 text-secondary-500 flex-1 font-pregular"
        value = {value}
        placeholder = "Search your favorite app"
        placeholderTextColor = "#7b7b8b"
        onChangeText = {handleChangeText}
        secureTextEntry = {title === 'Password' && !showPassword}
        />
        
    <TouchableOpacity>
        <Image 
        source={icons.search}
        className = "w-5 h-5"
        resizeMode="contain" />
    </TouchableOpacity>

    </View>
  )
}

export default SearchInput