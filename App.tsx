
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import List from './app/screens/List';
import Details from './app/screens/Details';
import ImageUpload from './app/screens/ImageUpload';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Image Upload" component={ImageUpload} />
        <Stack.Screen name="My ToDo's" component={List} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
