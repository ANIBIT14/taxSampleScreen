/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  Animated,
  Easing,
  NativeModules,
  Text,
  TextInput,
  Platform,
} from 'react-native';
import {enableScreens} from 'react-native-screens';
import SampleScreen from './src/Modules/Screens/SampleScreen';

enableScreens();

if (Text.defaultProps == null) {
  Text.defaultProps = {};
}
// Text.defaultProps.allowFontScaling = false;
if (TextInput.defaultProps == null) {
  TextInput.defaultProps = {};
}
// Text.defaultProps.allowFontScaling = false;

Text.defaultProps.allowFontScaling = false;
TextInput.defaultProps.allowFontScaling = false;
Text.defaultProps.adjustsFontSizeToFit = true;
Text.defaultProps.minimumFontScale = 0.5;

console.disableYellowBox = true; // Disable Warnings for Deprecated

const RootStack = createStackNavigator(
  {
    SampleScreen: {
      screen: SampleScreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'SampleScreen',
    initialRouteParams: {},
    headerMode: 'none',
    defaultNavigationOptions: {
      headerShown: false,
    },
  },
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}
