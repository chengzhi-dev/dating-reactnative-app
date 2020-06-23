import React from 'react';
import { View, Text, Platform, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { fromLeft, fromRight } from 'react-navigation-transitions';
import SignupScreen from './src/components/auth/SignupScreen';
import LoginScreen from './src/components/auth/LoginScreen';
import CustomScreen from './src/components/home/CustomScreen';
import DeliveryScreen from './src/components/home/DeliveryScreen';
import AdminScreen from './src/components/home/AdminScreen';

const headerstyle = {
  paddingTop:0
};
const AppNavigator = createStackNavigator({
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
    Custom: {
      screen: CustomScreen,
    },
    Delivery: {
      screen: DeliveryScreen,
    },
    Admin: {
      screen: AdminScreen,
    }
  },
  {
    initialRouteName: 'Login',
    transitionConfig: () => fromLeft(),
    defaultNavigationOptions: {
      headerStyle: {
        // backgroundColor: '#f4511e',
        marginTop: -60
      },
      
    },
    
  }

);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}