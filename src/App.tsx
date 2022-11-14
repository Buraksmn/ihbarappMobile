import * as React from 'react';
import {StatusBar, View} from 'react-native';
import MainStack from './Routers/MainStack';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle={'dark-content'} />
      <MainStack />
    </View>
  );
}
