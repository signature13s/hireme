import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import Header20 from './src/Header20';
import {
  ChevronDownIcon,
  ChevronUpIcon,
  EyeIcon,
  ArrowRightStartOnRectangleIcon,
} from 'react-native-heroicons/outline';
import {CheckBadgeIcon} from 'react-native-heroicons/solid';

const Home = ({navigation}) => {
  const [rectopen, setrectopen] = useState(false);
  const [profileshow, setprofileshow] = useState(true);
  return (
    <View className="bg-primary flex flex-1">
      <Header20 />
      {profileshow == true ? (
        <View>
          <Text className="text-onboarding ml-4 mt-4 text-base font-Regular">
            Hey,Good Morning!
          </Text>
          {rectopen == false ? (
            <View className="h-16 w-80 bg-white self-center rounded-md flex-row justify-center items-center pr-2">
              <Image
                resizeMode="contain"
                className="h-14 self-center"
                source={require('../asset/DPImage.png')}
              />
              <View className="flex-1  ml-2">
                <Text className=" text-black font-Medium">
                  Mr.Mark David Johnson
                </Text>
                <Text className="font-Regular text-gray-400">UID:0000001</Text>
              </View>
              <ChevronDownIcon
                color="#098CE3"
                size={30}
                onPress={() => {
                  setrectopen(true);
                }}
              />
            </View>
          ) : (
            <View className="h-32 w-80 bg-white self-center rounded-md  ">
              <View className="flex-row justify-center items-center pr-2 mt-2">
                <Image
                  resizeMode="contain"
                  className="h-14 self-center"
                  source={require('../asset/DPImage.png')}
                />
                <View className="flex-1  ml-2">
                  <Text className=" text-black font-Medium">
                    Mr.Mark David Johnson
                  </Text>
                  <Text className="font-Regular text-gray-400">
                    UID:0000001
                  </Text>
                </View>
                <ChevronUpIcon
                  color="#098CE3"
                  size={30}
                  onPress={() => {
                    setrectopen(false);
                  }}
                />
              </View>
              <View className=" flex-row mt-4 ml-3">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Profile');
                  }}
                  className="h-6 w-24 bg-onboarding flex-row pt-1 pl-2 mr-1">
                  <EyeIcon color="#fff" size={12} />
                  <Text className="text-xs self-center mb-1 mx-1 text-white font-Regular">
                    View Profile
                  </Text>
                </TouchableOpacity>
                <CheckBadgeIcon color="green" size={25} />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  className="h-5 w-20 flex-row border-x border-y ml-24 border-[#098CE3] self-end ">
                  <ArrowRightStartOnRectangleIcon color="#098CE3" size={18} />
                  <Text className="font-Regular text-onboarding  ml-1">
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      ) : (
        <View className="hidden">
          <Text className="text-onboarding ml-4 mt-4 text-base font-Regular">
            Hey,Good Morning!
          </Text>
          {rectopen == false ? (
            <View className="h-16 w-80 bg-white self-center rounded-md flex-row justify-center items-center pr-2">
              <Image
                resizeMode="contain"
                className="h-14 self-center"
                source={require('../asset/DPImage.png')}
              />
              <View className="flex-1  ml-2">
                <Text className=" text-black font-Medium">
                  Mr.Mark David Johnson
                </Text>
                <Text className="font-Regular text-gray-400">UID:0000001</Text>
              </View>
              <ChevronDownIcon
                color="#098CE3"
                size={30}
                onPress={() => {
                  setrectopen(true);
                }}
              />
            </View>
          ) : (
            <View className="h-32 w-80 bg-white self-center rounded-md  ">
              <View className="flex-row justify-center items-center pr-2 mt-2">
                <Image
                  resizeMode="contain"
                  className="h-14 self-center"
                  source={require('../asset/DPImage.png')}
                />
                <View className="flex-1  ml-2">
                  <Text className=" text-black font-Medium">
                    Mr.Mark David Johnson
                  </Text>
                  <Text className="font-Regular text-gray-400">
                    UID:0000001
                  </Text>
                </View>
                <ChevronUpIcon
                  color="#098CE3"
                  size={30}
                  onPress={() => {
                    setrectopen(false);
                  }}
                />
              </View>
              <View className=" flex-row mt-4 ml-3">
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Profile');
                  }}
                  className="h-6 w-24 bg-onboarding flex-row pt-1 pl-2 mr-1">
                  <EyeIcon color="#fff" size={12} />
                  <Text className="text-xs self-center mb-1 mx-1 text-white font-Regular">
                    View Profile
                  </Text>
                </TouchableOpacity>
                <CheckBadgeIcon color="green" size={25} />
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Login');
                  }}
                  className="h-5 w-20 flex-row border-x border-y ml-24 border-[#098CE3] self-end ">
                  <ArrowRightStartOnRectangleIcon color="#098CE3" size={18} />
                  <Text className="font-Regular text-onboarding  ml-1">
                    Logout
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
      )}
      {profileshow == false ? (
        <ScrollView
          className="drop-shadow-2xl flex flex-2 bg-white h-full
      + w-full mt-5  rounded-3xl border-x-white border-y-white">
          <TouchableOpacity
            className=" h-2 w-10 self-center mt-1.5 bg-gray-300 rounded-lg"
            onPress={() => {
              setprofileshow(!profileshow);
            }}></TouchableOpacity>
          <Image
            source={require('../asset/PictureCarosoul.png')}
            resizeMode="contain"
            className="w-11/12 self-center"
          />
          <Text className=" w-11/12 h-10 bg-primary self-center my-1 pt-2 pl-2 font-Medium text-black rounded-md">
            Looking for Jobs & Internships
          </Text>
          
            <Image
              source={require('../asset/trainingandjobs.png')}
              resizeMode="contain"
              className="  h-28 self-center mt-1"
            />
          
          <Text
            className=" w-11/12 h-10 bg-[#FFFDF1] self-center my-1 pt-2 pl-2 font-Medium text-black rounded-md">
            Courses, Training and More
          </Text>
          
            <Image
              source={require('../asset/courseandmanagement.png')}
              resizeMode="contain"
              className="  h-28 self-center mt-1"
            />
          <Text className=" w-11/12 h-10 bg-primary self-center my-1 pt-2 pl-2 font-Medium text-black rounded-md">
            Looking for Jobs & Internships
          </Text>
          
            <Image
              source={require('../asset/trainingandjobs.png')}
              resizeMode="contain"
              className="  h-28 self-center mt-1"
            />
             <Text
            className=" w-11/12 h-10 bg-[#FFFDF1] self-center my-1 pt-2 pl-2 font-Medium text-black rounded-md">
            Courses, Training and More
          </Text>
          
            <Image
              source={require('../asset/courseandmanagement.png')}
              resizeMode="contain"
              className="  h-28 self-center mt-1"
            />
       
        </ScrollView>
      ) : (
        <View
          className="drop-shadow-2xl flex flex-2 bg-white h-full
      + w-full mt-5  rounded-3xl border-x-white border-y-white">
          <TouchableOpacity
            className=" h-2 w-10 self-center mt-1.5 bg-gray-300 rounded-lg"
            onPress={() => {
              setprofileshow(!profileshow);
            }}></TouchableOpacity>
          <Image
            source={require('../asset/PictureCarosoul.png')}
            resizeMode="contain"
            className="w-11/12 self-center"
          />
          <Text className=" w-11/12 h-10 bg-primary self-center my-1 pt-2 pl-2 font-Medium text-black rounded-md">
            Looking for Jobs & Internships
          </Text>
          
            <Image
              source={require('../asset/trainingandjobs.png')}
              resizeMode="contain"
              className="  h-28 self-center mt-1"
            />
          
          <Text
            className=" w-11/12 h-10 bg-[#FFFDF1] self-center my-1 pt-2 pl-2 font-Medium text-black rounded-md">
            Courses, Training and More
          </Text>
          
            <Image
              source={require('../asset/courseandmanagement.png')}
              resizeMode="contain"
              className="  h-28 self-center mt-1"
            />
          <Text className=" w-11/12 h-10 bg-primary self-center my-1 pt-2 pl-2 font-Medium text-black rounded-md">
            Looking for Jobs & Internships
          </Text>
          
            <Image
              source={require('../asset/trainingandjobs.png')}
              resizeMode="contain"
              className="  h-28 self-center mt-1"
            />
             <Text
            className=" w-11/12 h-10 bg-[#FFFDF1] self-center my-1 pt-2 pl-2 font-Medium text-black rounded-md">
            Courses, Training and More
          </Text>
          
            <Image
              source={require('../asset/courseandmanagement.png')}
              resizeMode="contain"
              className="  h-28 self-center mt-1"
            />
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
