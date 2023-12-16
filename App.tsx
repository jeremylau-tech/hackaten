
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {  Image} from 'react-native';
import List from './app/screens/List';
import Main from './app/screens/Main';
import scan from './app/screens/ImageUpload';
import schedule from './app/screens/addSchedule';
import React from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (

    // <NavigationContainer>

    // </NavigationContainer>

    <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Main}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./home.png')} 
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Scan Medication"
        component={scan}
        options={{
          tabBarLabel: 'Scan',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./camera.png')} 
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Schedule Medication"
        component={List}
        options={{
          tabBarLabel: 'Schedule',
          tabBarIcon: ({ color, size }) => (
            <Image
              source={require('./schedule.png')} 
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
    {/* <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Home" component={Main} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="addSchedule" component={schedule} />
      </Stack.Navigator> */}
  </NavigationContainer>
  );
};