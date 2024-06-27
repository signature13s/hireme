import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from './Home';
import {
  IdentificationIcon,
  BellAlertIcon,
} from 'react-native-heroicons/outline';
import {HomeIcon} from 'react-native-heroicons/solid';
import Profile from './Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveBackgroundColor: '#098CE3',
        tabBarInactiveBackgroundColor: '#fff',
        tabBarInactiveTintColor: '#098CE3',
        tabBarActiveTintColor: '#fff',
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 5,
          height: 60,
          borderBottomEndRadius: 30,
          borderBottomStartRadius: 30,
          marginBottom: 10,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
          tabBarIcon: ({color, size}) => {
            return <IdentificationIcon color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Main"
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({color, size}) => {
            return <HomeIcon color={color} size={size} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => {
            return <BellAlertIcon color={color} size={size} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

const styles = StyleSheet.create({});
