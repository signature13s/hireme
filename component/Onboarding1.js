import {StyleSheet, Text, View, Image} from 'react-native';
import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import {fontScale} from 'nativewind';

const Onboarding1 = (navigation) => {
 
  const easecenterout = {
    from: {
      scale: 1,
    },
    to: {
      scale: 26,
    },
  };
  return (
    <View className="flex flex-1 bg-onboarding justify-center items-center">
      <Animatable.Image
      delay={0}
        animation={easecenterout}
        duration={5000}
        source={require('../asset/Vector.png')}
        className=""
      />
      <Animatable.Image animation="zoomIn" delay={4000} duration={5000} source={require("../asset/Group49.png")}  className="mb-28" />
     
    </View>
  );
};

export default Onboarding1;

const styles = StyleSheet.create();
