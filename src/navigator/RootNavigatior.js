import React from 'react';
import Colors from '../constants/Colors';
import HomeScreen from '../containers/HomeScreen';
import {StyleSheet, Text, View} from 'react-native';
import {normalize, vw} from '../constants/Dimension';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileScreen from '../containers/ProfileScreen';
import PortfolioScreen from '../containers/PortfolioScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import FundsScreen from '../containers/FundsScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RootNavigatior = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={TabNavigator} />
      <Stack.Screen name="Fund" component={FundsScreen} />
    </Stack.Navigator>
  );
};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        showLabel: false,
        // Floating Tab Bar...
        style: {
          backgroundColor: Colors.darkBlue,
          marginBottom: normalize(40),
          marginHorizontal: normalize(40),
          // Max Height...
          height: Platform.OS === 'ios' ? vw(70) : vw(60),
          borderRadius: normalize(10),
          paddingTop: Platform.OS === 'ios' ? 20 : 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              // centring Tab Button...
              style={styles.centerTab}>
              <Icon
                name="compass-sharp"
                size={30}
                color={focused ? 'white' : '#8096af'}
              />
              <Text style={{color: focused ? 'white' : '#8096af'}}>
                Explore
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="PortFolio"
        component={PortfolioScreen}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => (
            <View style={styles.centerTab}>
              <Icon
                name="briefcase"
                size={30}
                color={focused ? 'white' : '#8096af'}></Icon>
              <Text style={{color: focused ? 'white' : '#8096af'}}>
                Portfolio
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={styles.centerTab}>
              <Icon
                name="person"
                size={30}
                color={focused ? 'white' : '#8096af'}></Icon>
              <Text style={{color: focused ? 'white' : '#8096af'}}>My App</Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default RootNavigatior;

const styles = StyleSheet.create({
  centerTab: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
