import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {UserCircleIcon, LockClosedIcon} from 'react-native-heroicons/outline';
import Header1 from './src/Header1';

const Login = ({navigation}) => {
  return (
    <View className="bg-primary flex flex-1 items-center ">
      <Header1 />
      <Image
        className="mt-20 mb-4 h-24"
        source={require('../asset/Group14.png')}
        resizeMode="contain"
      />
      <Text className=" text-base font-Black text-black">
        Let's sign you in,
      </Text>
      <Text className=" text-base font-Bold text-black ">
        We're waiting for you!
      </Text>
      <KeyboardAvoidingView className="border-t-2 border-2 border-[#098CE3] mt-10 flex flex-2 bg-white h-4/5 w-full mx-20 rounded-3xl">
        <Text className="font-Medium text-black mx-6 mt-7">
          Email Address<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <UserCircleIcon color="#098CE3" size={40} />
          <TextInput
            className="border-l  w-64 border-[#098CE3] font-Regular text-base "
            placeholder="youremail@gmail.com"
            // onChangeText={setemail}
            // value={email}
          />
        </View>
        <Text className="font-Medium mx-6 mt-2 text-black">
          Password<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <LockClosedIcon color="#098CE3" size={36} />
          <TextInput
            className="border-l  w-64 border-[#098CE3] font-Regular text-base "
            placeholder="********"
            secureTextEntry={true}
            // onChangeText={setemail}
            // value={email}
          />
        </View>
        <TouchableOpacity
          className=" self-end "
          onPress={() => {
            navigation.navigate('Forgot');
          }}>
          <Text className="text-sm font-Bold text-buttons self-center mt-2 mr-6">
            Forget Password?
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className=" self-center mt-4 h-12 w-80 rounded-lg bg-buttons" onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text className="text-lg font-Bold text-white self-center mt-2">
            Login
          </Text>
        </TouchableOpacity>
        <Text className="font-Medium mx-6 mt-2 text-black">
          By clicking Login, you agree to Hire Me’s{" "}
          <Text className="text-buttons">Terms & Conditions.</Text>
        </Text>
        <View className="flex-row items-center">
          <View className="h-1 flex-1 ml-5 mr-1 bg-gray-300" />
          <View>
            <Text className="self-center text-lg mx-1 mb-1 text-black ">
              or
            </Text>
          </View>
          <View className="h-1 flex-1 mr-5 ml-1 bg-gray-300" />
        </View>
        <TouchableOpacity className=" self-center mt-4 h-12 w-80 rounded-lg border-[#098CE3] border-2 " onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text className="text-lg font-Bold text-black self-center mt-2">
            Register
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
