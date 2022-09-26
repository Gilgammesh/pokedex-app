import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import {
  DefaultTheme,
  DarkTheme,
  NavigationContainer,
} from '@react-navigation/native';
import Navigation from './src/navigator/Navigation';

const App = () => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Navigation />
    </NavigationContainer>
  );
};

export default App;
