import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header1 from './src/Header1';
import {ClockIcon} from 'react-native-heroicons/outline';

const Verifyotp = ({navigation}) => {
  return (
    <View className="bg-primary flex-1 items-center ">
      <Header1 />
      <Text className=" text-xl font-Black mt-20 text-black">
        Verify your Email address
      </Text>
      <Text className=" text-xl font-Bold text-black ">
        Hey, have You Received!{' '}
      </Text>
      <Image
        className=" mb-4 h-80 "
        source={require('../asset/Enter-OTP-bro.png')}
        resizeMode="contain"
      />
      <View className="border-t-2 border-2 border-[#098CE3] mt-2 flex flex-2 bg-white h-4/5 w-full mx-20 rounded-3xl">
        <Text className="font-Medium text-black mx-6 mt-7 mb-5 self-center mb text-base">
          Enter One Time Password<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <ClockIcon color="#098CE3" size={40} />
          <TextInput
            className="border-l  w-64 border-[#098CE3] font-Regular  text-gray-100 "
            placeholder="youremail@gmail.com"
            // onChangeText={setemail}
            // value={email}
          />
        </View>
        <Text className="font-Medium mx-6 mt-2 text-black">
          Please, Enter your
          <Text className="text-buttons"> six digit </Text>
          code that you have received in your mail box.{' '}
          <Text className="text-buttons">Resend OTP</Text>
        </Text>
        <TouchableOpacity
          className=" self-center mt-4 h-12  w-80 rounded-lg bg-buttons"
          onPress={() => {
            navigation.navigate('NewPass');
          }}>
          <Text className="text-lg font-Bold text-white self-center mt-2">
            Confirm
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verifyotp;

const styles = StyleSheet.create({});
