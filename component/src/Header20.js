import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { BellAlertIcon,Bars3CenterLeftIcon } from "react-native-heroicons/outline";

import {useNavigation} from '@react-navigation/native';


const Header20 = () => {
  const navigation = useNavigation();

  return (
    <View className="flex flex-row mt-3 justify-between ">
    <Image
      resizeMode="contain"
      className="  h-6"
      source={require('../../asset/Group49.png')}
    />
    <View className='flex-row mr-6 w-20 justify-between'>

    <BellAlertIcon  color="#000" size={30}/>
    <Bars3CenterLeftIcon rotation={180} color='#000' size={30} onPress={()=>{navigation.navigate("Profile");}} />
    </View>

  </View>
  )
}

export default Header20

const styles = StyleSheet.create({})