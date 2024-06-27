import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import Onboarding1 from './component/Onboarding1';
import Login from './component/Login';
import Forgot from './component/Forgot';
import Register from './component/Register';
import Verifyotp from './component/Verifyotp';
import NewPass from './component/NewPass';
import Profile from './component/Profile';
import Tabs from './component/Tabs';

const App = () => {
  const Stack = createNativeStackNavigator();
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setloading(false);
    }, 13000);
  
    return () => clearTimeout(timer);
  
  }, []);
  if(loading) return<Onboarding1/>
  
  return (
   <NavigationContainer>
    <Stack.Navigator  initialRouteName="Login" screenOptions={{headerShown:false}}>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='Home' component={Tabs}/>
      <Stack.Screen name='Forgot' component={Forgot}/>
      <Stack.Screen name='Register' component={Register}/>
      <Stack.Screen name='Verifyotp' component={Verifyotp}/>
      <Stack.Screen name='NewPass' component={NewPass}/>
      <Stack.Screen name='Profile' component={Profile}/>
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})