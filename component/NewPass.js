import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React,{useState} from 'react';
import Header1 from './src/Header1';
import {LockClosedIcon,EyeIcon,EyeSlashIcon} from 'react-native-heroicons/outline';

const NewPass = ({navigation}) => {
  const [eyepass1, seteyepass1] = useState(false)
  const [eyepass2, seteyepass2] = useState(false)
  return (
    <View className="bg-primary flex-1 items-center ">
      <Header1 />
      <Text className=" text-xl font-Black mt-20 text-black">
      Create new Password,
      </Text>
      <Text className=" text-xl font-Bold text-black ">
      Make it stronger!
      </Text>
      <Image
        className=" mb-4 h-64 "
        source={require('../asset/Reset-password-bro.png')}
        resizeMode="contain"
      />
       <View className=" bg-white h-40 w-full rounded-full  -z-10 absolute top-96 left-0 rotate-12"></View>
      <View className=" bg-white h-40 w-full rounded-full  -z-10 absolute top-80 -left-10 rotate-12"></View>

      <View className=" bg-white h-40 w-full rounded-full  -z-10 absolute top-80 left-20 rotate-12"></View>
      <View className="border-t-2 border-2 border-[#098CE3] mt-2 flex flex-2 bg-white h-4/5 w-full mx-20 rounded-3xl">
        <Text className="font-Medium text-black mx-6 mt-7 mb-2 text-base">
          New Password<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <LockClosedIcon color="#098CE3" size={40} />
          <TextInput
            className="border-l  w-56 border-[#098CE3] font-Regular   "
            placeholder="********"
            // onChangeText={setemail}
            // value={email}
            secureTextEntry={!eyepass1}
          />
          {eyepass1?(<EyeIcon color="#098CE3" size={38} onPress={()=>{seteyepass1(!eyepass1)}}/>):(<EyeSlashIcon color="#098CE3" size={38} onPress={()=>{seteyepass1(!eyepass1)}}/>)}

          
        </View>
        <Text className="font-Medium text-black mx-6 mt-2 mb-2 text-base">
          Confirm New Password<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <LockClosedIcon color="#098CE3" size={40} />
          <TextInput
            className="border-l  w-56 border-[#098CE3] font-Regular  "
            placeholder="********"
            // onChangeText={setemail}
            // value={email}
            secureTextEntry={!eyepass2}
            />
            {eyepass2?(<EyeIcon color="#098CE3" size={38} onPress={()=>{seteyepass2(!eyepass2)}}/>):(<EyeSlashIcon color="#098CE3" size={38} onPress={()=>{seteyepass2(!eyepass2)}}/>)}
          </View>
        <Text className="font-Medium mx-6 mt-2 self-center text-center text-black">
          Password must be
          <Text className="text-buttons text-center"> 8 digit </Text>
          long with combination of alphanumeric values,
        </Text>
        <TouchableOpacity
          className=" self-center mt-4 h-12  w-80 rounded-lg bg-buttons"
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text className="text-lg font-Bold text-white self-center mt-2">
            Reset Password
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NewPass;

const styles = StyleSheet.create({});
