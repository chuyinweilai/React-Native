/**
 * @format
 */

import React from 'react';
import {AppRegistry} from 'react-native';
import Index from './app/index';
import {name as appName} from './app.json';
import { SafeAreaProvider  } from 'react-native-safe-area-context';


const App = () => {
  return (
    <SafeAreaProvider>
      <Index/>
    </SafeAreaProvider>
  );
};


AppRegistry.registerComponent(appName, () => App);
