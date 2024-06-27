import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Icon,
  TouchableOpacity
} from 'react-native';
import React, {useMemo, useState} from 'react';
import Header1 from './src/Header1';
import {
  LockClosedIcon,
  UserCircleIcon,
  CalendarDaysIcon,
  ChevronDownIcon,
  EyeIcon,
  EyeSlashIcon,
} from 'react-native-heroicons/outline';
import RadioGroup from 'react-native-radio-buttons-group';
import DatePicker from 'react-native-date-picker';
import {Item, Picker} from 'native-base';

const Register = ({navigation}) => {
  const [eyepass1, seteyepass1] = useState(false);
  const [eyepass2, seteyepass2] = useState(false);
  const [dropvalue, setdropvalue] = useState(undefined);
  const [selectedId, setselectedId] = useState();
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const radioButtons = useMemo(
    () => [
      {
        id: 1, // acts as primary key, should be unique and non-empty string
        label: <Text className="text-black text-lg mr-7 font-Medium">Male</Text>,
        value: 1,
        size: 17,
        borderColor: '#d9d9d9',
        color: '#098CE3',
      },
      {
        id: 2,
        label: <Text className="text-black text-lg mr-7 font-Medium">Female</Text>,
        value: 2,
        size: 17,
        borderColor: '#d9d9d9',
        color: '#098CE3',
      },
      {
        id: 3,
        label: <Text className="text-black text-lg font-Medium ">Other</Text>,
        value: 3,
        size: 17,
        borderColor: '#d9d9d9',
        color: '#098CE3',
      },
    ],
    [],
  );
  return (
    <View className="bg-primary flex flex-1 items-center ">
      <Header1 />
      <Text className=" text-xl font-Medium mt-20 text-black">
        Register to get started,
      </Text>
      <Text className="text-xl font-Medium text-black ">
        Start your journey with us.
      </Text>
      <ScrollView className="border-t-2 border-2 border-[#098CE3] mt-10 flex flex-2 bg-white h-4/5 w-full mx-20 rounded-3xl">
        <Text className="font-Bold text-black mx-6 mt-10 mb-5 self-center mb text-xl">
          Personal Information
        </Text>
        <Text className="font-Medium text-black mx-6 mt-7">
          Your Full Name<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <TextInput
            className=" ml-2  w-64 border-[#098CE3] font-Regular text-base text-gray-100"
            placeholder="John Doe"
            // onChangeText={setemail}
            // value={email}
          />
        </View>
        <Text className="font-Medium mx-6 mt-4 text-black">
          Father's Full Name<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <TextInput
            className="ml-2  w-64 border-[#098CE3] font-Regular text-base text-gray-100"
            placeholder="Robert Dave"
            // secureTextEntry={true}
            // onChangeText={setemail}
            // value={email}
          />
        </View>
        <Text className="font-Medium mx-6 mt-4 text-black">
          Gender<Text className="text-red-700">*</Text>
        </Text>
        <View className=" self-center flex ">
          <RadioGroup
            layout="row"
            className="font-bold text-black "
            radioButtons={radioButtons}
            horizontal={true}
            color="#098CE3"
            onPress={setselectedId}
            selectedId={selectedId}
          />
        </View>
        <Text className="font-Medium text-black mx-6 mt-7">
          Date of Birth<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <CalendarDaysIcon
            color="#098CE3"
            size={40}
            onPress={() => {
              setOpen(true);
            }}
          />
          <TextInput
            className="border-l  w-60 border-[#098CE3] font-Regular text-base "
            placeholder="DD/MM/YYYY"
            onDateChange={setDate}
            value={Date}
          />
          <ChevronDownIcon
            color="#098CE3"
            size={20}
            onPress={() => {
              setOpen(true);
            }}
          />
          <DatePicker
            modal
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </View>
        <Text className="font-Medium text-black mx-6 mt-7">
          Birth Place<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              className=""
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={dropvalue}
              onValueChange={setdropvalue}>
              <Picker.Item label="Select" value="key0" />
              <Picker.Item label="Bhopal" value="key1" />
              <Picker.Item label="Jhansi" value="key2" />
              <Picker.Item label="Delhi" value="key3" />
              <Picker.Item label="Itarsi" value="key4" />
            </Picker>
          </Item>
        </View>
        <Text className="font-Bold text-black mx-6 mt-10 mb-5 self-center mb text-xl">
          Contact Information
        </Text>
        <Text className="font-Medium text-black mx-6 mt-7">
          Phone Number<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <TextInput
            className=" ml-2  w-64 border-[#098CE3] font-Regular text-base text-gray-100"
            placeholder="+91"
            keyboardType="number-pad"

            // onChangeText={setemail}
            // value={email}
          />
        </View>
        <Text className="font-Medium text-black mx-6 mt-7">
          Whatsapp Number<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <TextInput
            className=" ml-2  w-64 border-[#098CE3] font-Regular text-base text-gray-100"
            placeholder="+91"
            keyboardType="number-pad"
            // onChangeText={setemail}
            // value={email}
          />
        </View>
        <Text className="font-Bold text-black mx-6 mt-10 mb-5 self-center mb text-xl">
          Educational Information
        </Text>
        <Text className="font-Medium text-black mx-6 mt-7">
          College Name<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <TextInput
            className=" ml-2  w-64 border-[#098CE3] font-Regular text-base text-gray-100"
            placeholder="College Name Here"
            // keyboardType='number-pad'

            // onChangeText={setemail}
            // value={email}
          />
        </View>
        <Text className="font-Medium text-black mx-6 mt-7">
          College's State<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
        <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              className=""
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={dropvalue}
              onValueChange={setdropvalue}>
              <Picker.Item label="Select State" value="key0" />
              <Picker.Item label="Uttar Pradesh" value="key1" />
              <Picker.Item label="Madhya Pradesh" value="key2" />
              <Picker.Item label="Delhi" value="key3" />
              <Picker.Item label="UttaraKhand" value="key4" />
            </Picker>
          </Item>
        </View>
        <Text className="font-Medium text-black mx-6 mt-7">
          Branch<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
        <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              className=""
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={dropvalue}
              onValueChange={setdropvalue}>
              <Picker.Item label="Select Branch" value="key0" />
              <Picker.Item label="Computer Science and Engineering" value="key1" />
              <Picker.Item label="Electronic and Communication Engineering" value="key2" />
              <Picker.Item label="Electrical Engineering" value="key3" />
              <Picker.Item label="Mechanical Engineering" value="key4" />
            </Picker>
          </Item>
        </View>
        <Text className="font-Medium text-black mx-6 mt-7">
          Degree<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
        <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              className=""
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={dropvalue}
              onValueChange={setdropvalue}>
              <Picker.Item label="Select Degree" value="key0" />
              <Picker.Item label="B.E/B.TECH" value="key1" />
              <Picker.Item label="B.SC"value="key2" />
              <Picker.Item label="MBBS" value="key3" />
              <Picker.Item label="B.Com" value="key4" />
            </Picker>
          </Item>
        </View>
        <Text className="font-Medium text-black mx-6 mt-7">
          Passout Year<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
        <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              className=""
              placeholderStyle={{color: '#bfc6ea'}}
              placeholderIconColor="#007aff"
              selectedValue={dropvalue}
              onValueChange={setdropvalue}>
              <Picker.Item label="Select Passout Year" value="key0" />
              <Picker.Item label="2027" value="key1" />
              <Picker.Item label="2026" value="key2" />
              <Picker.Item label="2025" value="key3" />
              <Picker.Item label="2024" value="key4" />
            </Picker>
          </Item>
        </View>
        <Text className="font-Bold text-black mx-6 mt-10 mb-5 self-center mb text-xl">
          Create Password
        </Text>
        <Text className="font-Medium text-black mx-6 mt-7 mb-2 text-base">
          New Password<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <LockClosedIcon color="#098CE3" size={40} />
          <TextInput
            className="border-l w-56 border-[#098CE3] font-Regular   "
            placeholder="********"
            // onChangeText={setemail}
            // value={email}
            secureTextEntry={!eyepass1}

          />
          {eyepass1?(<EyeIcon  color="#098CE3" size={30} onPress={()=>{seteyepass1(!eyepass1)}}/>):(<EyeSlashIcon color="#098CE3" size={30} onPress={()=>{seteyepass1(!eyepass1)}}/>)}

        </View>
        
        <Text className="font-Medium text-black mx-6 mt-2 mb-2 text-base">
          Confirm New Password<Text className="text-red-700">*</Text>
        </Text>
        <View className="flex flex-row mx-5 items-center  border-x border-y rounded-lg border-[#098CE3]">
          <LockClosedIcon color="#098CE3" size={40} />
          <TextInput
            className="border-l  w-56 border-[#098CE3] font-Regular   "
            placeholder="********"
            // onChangeText={setemail}
            // value={email}
            secureTextEntry={!eyepass2}

          />
          {eyepass2?(<EyeIcon color="#098CE3" size={30} onPress={()=>{seteyepass2(!eyepass2)}}/>):(<EyeSlashIcon color="#098CE3" size={30} onPress={()=>{seteyepass2(!eyepass2)}}/>)}
          </View>
          <TouchableOpacity className=" self-center mt-4 h-12 w-80 rounded-lg bg-buttons" onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text className="text-lg font-Bold text-white self-center mt-2">
            Register Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({});
