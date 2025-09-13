import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import all the screens for your app
import HomeScreen from './screens/HomeScreen';
import LibraryScreen from './screens/LibraryScreen';
import DetailScreen from './screens/DetailScreen';
import ResultScreen from './screens/ResultScreen'; // Import the new screen

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#F4F6F-7' },
          headerTintColor: '#333',
          headerTitleStyle: { fontWeight: 'bold' },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Library"
          component={LibraryScreen}
          options={{ title: 'Library' , headerShown: false }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ headerShown: false }} // <-- CHANGE IS HERE
        />
        {/* Add the new ResultScreen to the navigator */}
        <Stack.Screen
          name="Result"
          component={ResultScreen}
          options={{ title: 'Identification Result' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
