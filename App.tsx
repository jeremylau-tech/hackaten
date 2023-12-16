
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {  Image} from 'react-native';
import List from './app/screens/List';
import main from './app/screens/Main';
import scan from './app/screens/ImageUpload';
import schedule from './app/screens/addSchedule';
import pill from './app/screens/Pill_Info';

import React from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={main}
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
  );
}


export default function App() {
  return (
  <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }}/>
        <Stack.Screen name="addSchedule" component={schedule} />
      </Stack.Navigator>
  </NavigationContainer>
  );
};