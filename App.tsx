// App.tsx
import React, { useState, useEffect } from 'react';
import { NativeStackNavigationOptions, createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Details from './app/screens/Details';
import ImageUpload from './app/screens/ImageUpload';
import ChatScreen from './app/screens/ChatScreen';
const run = require('./generateText'); // Import the run function

const Stack = createNativeStackNavigator();

type RootStackParamList = {
  Chat: { updateGeneratedText: (text: string) => void };
  'Image Upload': undefined;
  'My ToDo\'s': undefined;
  Details: undefined;
};

type MyStackOptions = NativeStackNavigationOptions & {
  initialParams?: {
    updateGeneratedText: (text: string) => void;
  };
};

export default function App() {
  const [generatedText, setGeneratedText] = useState<string | undefined>("Your generated text");

  const updateGeneratedText = (text: string) => {
    setGeneratedText(text);
  };

  useEffect(() => {
    // Pass the updateGeneratedText function directly to the run function
    run(updateGeneratedText);
  }, []); // Run only once when the component mounts

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Chat"
          options={{
            initialParams: { updateGeneratedText },
          } as MyStackOptions}
        >
          {props => <ChatScreen {...props} updateGeneratedText={updateGeneratedText} />}
        </Stack.Screen>
        <Stack.Screen name="Image Upload" component={ImageUpload} />
        <Stack.Screen name="My ToDo's" component={List} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
