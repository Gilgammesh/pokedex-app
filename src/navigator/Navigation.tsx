import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {SimplePokemon} from '../interfaces/pokemon';
import PokemonScreen from '../screens/PokemonScreen';

export type RootStackNavigatorParams = {
  HomeScreen: undefined;
  PokemonScreen: {
    simplePokemon: SimplePokemon;
  };
};

const Stack = createStackNavigator<RootStackNavigatorParams>();

const Navigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PokemonScreen" component={PokemonScreen} />
    </Stack.Navigator>
  );
};

export default Navigation;
