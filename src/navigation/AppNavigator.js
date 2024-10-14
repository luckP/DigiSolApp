import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CommonActions } from '@react-navigation/native';
import { Image } from 'react-native';
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import AdsScreen from '../screens/AdsScreen/AdsScreen';
import ServicesScreen from '../screens/ServicesScreen/ServicesScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

// Create a Stack and Tab Navigator
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator for Ads, Services, and Profile pages
const MainTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Ads"
        component={AdsScreen}
        options={{
          tabBarIcon: () => <Image source={require('../assets/icons/example.png')} style={{ width: 24, height: 24 }} />,
        }}
      />
      <Tab.Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarIcon: () => <Image source={require('../assets/icons/example.png')} style={{ width: 24, height: 24 }} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => <Image source={require('../assets/icons/example.png')} style={{ width: 24, height: 24 }} />,
        }}
      />
    </Tab.Navigator>
  );
};

// Main Navigator containing Login and Main Content (Ads, Services, Profile)
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login Screen */}
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        
        {/* Main App Content (Ads, Services, Profile) */}
        <Stack.Screen
          name="Main"
          component={MainTabs}
          options={{
            gestureEnabled: false, // Disable back swipe (iOS)
            headerShown: false,    // Hide header
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
