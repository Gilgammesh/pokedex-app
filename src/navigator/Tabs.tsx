import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Navigation from './Navigation';
import SearchScreen from '../screens/SearchScreen';
import {useTheme} from '@react-navigation/native';
import {Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {colors} = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="NavigationScreen"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5856d6',
        tabBarLabelStyle: {
          marginBottom: Platform.OS === 'ios' ? 0 : 10,
        },
        tabBarStyle: {
          borderWidth: 0,
          elevation: 0,
          height: Platform.OS === 'ios' ? 76 : 60,
          paddingTop: 10,
          position: 'absolute',
          backgroundColor: 'rgba(255,255,255,0.8)',
        },
      }}
      sceneContainerStyle={{
        backgroundColor: colors.background,
      }}>
      <Tab.Screen
        name="NavigationScreen"
        component={Navigation}
        options={{
          tabBarLabel: 'Listado',
          tabBarIcon: ({color}) => (
            <Icon name="list-outline" color={color} size={20} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          tabBarLabel: 'Búsqueda',
          tabBarIcon: ({color}) => (
            <Icon name="search-outline" color={color} size={20} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
