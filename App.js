import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { I18nextProvider } from "react-i18next"; // ✅ fixed
import i18n from "./i18n";

import HomeScreen from './screens/HomeScreen';
import LibraryScreen from './screens/LibraryScreen';
import DetailScreen from './screens/DetailScreen';
import ResultScreen from './screens/ResultScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Library" component={LibraryScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Result" component={ResultScreen} options={{ title: 'Identification Result' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </I18nextProvider>
  );
}
