import { StyleSheet, Text, View,Image,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'
import Header1 from './src/Header1'
import {UserCircleIcon, LockClosedIcon} from 'react-native-heroicons/outline';


const Forgot = ({navigation}) => {
  return (
    <View className="bg-primary flex-1 items-center ">
      <Header1 />
      <Text className=" text-xl font-Black mt-20 text-black">
      Forget Your Password,
      </Text>
      <Text className=" text-xl font-Bold text-black ">
      No worries, it happens!
      </Text>
      <Image
        className=" mb-4 h-80 "
        source={require('../asset/Forgot-password-bro.png')}
        resizeMode="contain"
      />
      <View className="border-t-2 border-2 border-[#098CE3] mt-2 flex flex-2 bg-white h-4/5 w-full mx-20 rounded-3xl">
      <Text className="font-Medium text-black mx-6 mt-7 mb-5 self-center mb text-base">
          Email Address<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <UserCircleIcon color="#098CE3" size={40} />
          <TextInput
            className="border-l  w-64 border-[#098CE3] font-Regular  text-gray-100 "
            placeholder="youremail@gmail.com"
            // onChangeText={setemail}
            // value={email}
          />
         
        </View>
        <Text className="font-Medium mx-6 mt-2 text-black">
    Enter your email address to receive a{" "} <Text className="text-buttons">verification code </Text>
          in your mail box.
        </Text>
        <TouchableOpacity className=" self-center mt-4 h-12  w-80 rounded-lg bg-buttons" onPress={() => {
            navigation.navigate('Verifyotp');
          }}>
          <Text className="text-lg font-Bold text-white self-center mt-2">
            Send OTP
          </Text>
        </TouchableOpacity>
      </View>
     
     
    </View>
  )
}

export default Forgot

const styles = StyleSheet.create({})