import {StyleSheet, Text, View,Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header1 = () => {
  const navigation = useNavigation();
  return (
    <View className="bg-primary flex flex-1 items-center ">
      <Image
        className="my-8 h-6"
        source={require('../../asset/Group49.png')}
        
        resizeMode="contain"
      />
    </View>
  );
};

export default Header1;

const styles = StyleSheet.create({});
