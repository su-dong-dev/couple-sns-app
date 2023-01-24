import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomePage from '../page/HomePage';
import WritePage from '../page/WirtePage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          switch (route.name) {
            case 'Home':
              iconName = 'home';
              break;
            case 'Add':
              iconName = 'add-circle';
              break;
            case 'My':
              iconName = 'body';
              break;
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: '#424242',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Add" component={WritePage} />
      <Tab.Screen name="My" component={WritePage} />
    </Tab.Navigator>
  );
};
export default BottomTabs;
