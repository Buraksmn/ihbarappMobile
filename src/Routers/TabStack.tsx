import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import StolenScreen from '../screens/StolenScreen';
import DoubtfulScreen from '../screens/DoubtfulScreen';
import {Home, Plussmall, User} from '../components/Icons';
import {Text} from 'react-native-svg';
import {TouchableOpacity, View} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';
import NewAdvertScreen from '../screens/NewAdvertScreen';
import TabBarPlus from '../components/TabBarPlus/TabBarPlus';

export type TabStackParams = {
  Home: undefined;
  Profile: undefined;
  New: undefined;
  Stolen: undefined;
  Doubtful: undefined;
};

const Tab = createBottomTabNavigator<TabStackParams>();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarIconStyle: {display: 'none'},
        tabBarLabelPosition: 'beside-icon',
        tabBarLabelStyle: {
          position: 'absolute',
          fontWeight: '500',
          fontSize: 14,
        },
      }}>
      <Tab.Screen
        name="Home"
        options={{
          headerShown: false,
          headerShadowVisible: false,
          tabBarIconStyle: {display: 'flex'},
          tabBarLabel: () => <Text />,
          tabBarIcon: () => <Home />,
        }}
        component={HomeScreen}
      />

      <Tab.Screen
        name="Stolen"
        options={{
          tabBarLabel: 'Çalıntı',
          headerShown: false,
          headerShadowVisible: false,
        }}
        component={StolenScreen}
      />

      <Tab.Screen
        name="New"
        options={{
          headerShown: false,
          headerShadowVisible: false,
          tabBarIconStyle: {display: 'flex'},
          tabBarLabel: () => <Text />,
          tabBarButton: props => <TabBarPlus {...props} />,
          tabBarItemStyle: {
            backgroundColor: 'green',
            borderRadius: 200,
            padding: 0,
            margin: 0,
            position: 'relative',
            top: -20,
          },
        }}
        component={NewAdvertScreen}
      />

      <Tab.Screen
        name="Doubtful"
        options={{
          tabBarLabel: 'Şüpeli',
          headerShown: false,
          headerShadowVisible: false,
        }}
        component={DoubtfulScreen}
      />

      <Tab.Screen
        name="Profile"
        options={{
          tabBarIconStyle: {display: 'flex'},
          tabBarLabel: () => <Text />,
          tabBarIcon: () => <User />,
          headerShown: false,
          headerShadowVisible: false,
        }}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default TabStack;
