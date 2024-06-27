import {StyleSheet, Text, View,ScrollView,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  ChevronLeftIcon,
  BellAlertIcon,
  CheckBadgeIcon,
  UserCircleIcon,
  ChevronDownIcon,
  ExclamationCircleIcon,
  UserIcon,
  ChevronUpIcon,
  ArrowRightStartOnRectangleIcon,
} from 'react-native-heroicons/outline';
import {Image} from 'react-native-animatable';

const Profile = ({navigation}) => {
  const [open, setopen] = useState(false);
  return (
    <View className="flex flex-1 bg-primary">
      <View className="flex-row my-4 justify-between mx-4">
        <ChevronLeftIcon color={'#000'} size={35} onPress={()=>{navigation.navigate("Home")}}/>
        <Text className="font-Medium text-lg text-black ">Options</Text>
        <BellAlertIcon color={'#000'} size={35} />
      </View>

      <View className=" drop-shadow-2xl mt-2 flex flex-1 bg-white w-full h-full rounded-3xl items-center pt-10 ">
        <Image
          source={require('../asset/DPImage.png')}
          resizeMode="contain"
          class="h-20"
        />
        <Text className="font-Medium text-lg text-black mt-2">
          Mr.Mark David Johnson
        </Text>
        <Text className="font-Medium text-base text-gray-400">
          UID : 0000001
        </Text>
        <View className="bg-green-700 h-10 w-28 flex-row justify-center items-center ">
          <CheckBadgeIcon color={'#fff'} size={20} />
          <Text className="text-white ml-1">Verified</Text>
        </View>
        <Text className=" w-11/12 bg-primary flex justify-start py-4 text-lg font-Medium text-black rounded-lg mt-2 pl-3">
          General Option
        </Text>
        {open ? (
          <ScrollView className="flex flex-1">
            <View className=" flex-row w-11/12 mt-2">
              <UserCircleIcon color={'#000'} size={40} />
              <Text className=" text-black font-Medium text-lg mx-3 mr-12 ">
                Personal Information
              </Text>
              <ChevronUpIcon
                color={'#000'}
                size={20}
                onPress={() => {
                  setopen(!open);
                }}
              />
            </View>

            <Text className="text-base font-Medium mt-2 ml-4 text-onboarding">Father's Full Name</Text>
            <Text className="text-base font-Medium mt-2 ml-4 text-black">Robert Dave</Text>
            <View className="w-11/12 h-0.5 bg-onboarding self-center"></View>
            <View className=" flex-row">
            <Text className="text-md font-Medium mt-2 ml-3 text-onboarding">Gender</Text>
            <Text className="text-md font-Medium mt-2 ml-4 text-onboarding">Date Of Birth</Text>
            <Text className="text-md font-Medium mt-2 ml-4 text-onboarding">Birth Place</Text>
            </View>

            <View className=" flex-row">
            <Text className="text-md font-Medium mt-2 ml-3 mr-5 text-black">Male</Text>
            <Text className="text-md font-Medium mt-2 ml-4 mr-2 text-black">15/02/1998</Text>
            <Text className="text-md font-Medium mt-2 ml-4 text-black">Madhya Pradesh</Text>
            </View>

            <Text className="text-base font-Medium mt-2 ml-4 text-onboarding">Email Address</Text>
            <Text className="text-base font-Medium mt-2 ml-4 text-black">David@gmail.com</Text>
            <View className="w-11/12 h-0.5 bg-onboarding self-center"></View>

            <Text className="text-base font-Medium mt-2 ml-4 text-onboarding">Phone Number</Text>
            <Text className="text-base font-Medium mt-2 ml-4 text-black">+91 9XXXXXXXX9</Text>
            <View className="w-11/12 h-0.5 bg-onboarding self-center"></View>
            
            <Text className="text-base font-Medium mt-2 ml-4 text-onboarding">College Name</Text>
            <Text className="text-base font-Medium mt-2 ml-4 text-black">Unknown Institue Of Technology</Text>
            <View className="w-11/12 h-0.5 bg-onboarding self-center"></View>

            <Text className=" bg-[#FFFDF1] flex justify-start py-4 text-lg font-Medium text-black rounded-lg mt-2 pl-3">
              Support & More
            </Text>
            <View className=" flex-row mt-2">
              <ExclamationCircleIcon color={'#000'} size={35} />
              <Text className=" text-black font-Medium text-lg mx-3 mr-40 ">
                Security
              </Text>
              <ChevronDownIcon color={'#000'} size={20} />
            </View>
            <View className=" flex-row mt-2">
              <UserIcon color={'#000'} size={35} />
              <Text className=" text-black font-Medium text-lg mx-3 mr-28 ">
                Privacy Policy
              </Text>
              <ChevronDownIcon color={'#000'} size={20} />
            </View>
            <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  className="h-5 w-20 flex-row border-x border-y mt-10 border-red-700 self-center ">
                  <ArrowRightStartOnRectangleIcon color="red" size={18} />
                  <Text className="font-Regular text-red-700  ml-1">
                    Logout
                  </Text>
                </TouchableOpacity>
          </ScrollView>
        ) : (
          <View className="flex flex-1">
            <View className=" flex-row w-11/12 mt-2">
              <UserCircleIcon color={'#000'} size={40} />
              <Text className=" text-black font-Medium text-lg mx-3 mr-12 ">
                Personal Information
              </Text>
              <ChevronDownIcon
                color={'#000'}
                size={20}
                onPress={() => {
                  setopen(!open);
                }}
              />
            </View>
            <Text className=" bg-[#FFFDF1] flex justify-start py-4 text-lg font-Medium text-black rounded-lg mt-2 pl-3">
              Support & More
            </Text>
            <View className=" flex-row mt-2">
              <ExclamationCircleIcon color={'#000'} size={35} />
              <Text className=" text-black font-Medium text-lg mx-3 mr-40 ">
                Security
              </Text>
              <ChevronDownIcon color={'#000'} size={20} />
            </View>
            <View className=" flex-row mt-2">
              <UserIcon color={'#000'} size={35} />
              <Text className=" text-black font-Medium text-lg mx-3 mr-28 ">
                Privacy Policy
              </Text>
              <ChevronDownIcon color={'#000'} size={20} />
            </View>
            <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  className="h-5 w-20 flex-row border-x border-y mt-10 border-red-700 self-center ">
                  <ArrowRightStartOnRectangleIcon color="red" size={18} />
                  <Text className="font-Regular text-red-700  ml-1">
                    Logout
                  </Text>
                </TouchableOpacity>
          </View>
          
        )}
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
