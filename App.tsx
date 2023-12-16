
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Details from './app/screens/Details';
import Schedule from './app/screens/addSchedule';
import React from 'react';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name= "Schedule" component={List} />
    //     <Stack.Screen name= "Add Schedule" component={Schedule} />
        
    //   </Stack.Navigator>

    // </NavigationContainer>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="List">
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="addSchedule" component={Schedule} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};