import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {Plussmall} from '../Icons';

const TabBarPlus = (props: BottomTabBarButtonProps) => {
  return (
    <View>
      <TouchableOpacity {...props} activeOpacity={1} style={styles.button}>
        <Plussmall />
      </TouchableOpacity>
    </View>
  );
};

export default TabBarPlus;

const styles = StyleSheet.create({
  button: {
    width: 40,
    height: 40,
    backgroundColor: 'white',
    top: -15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
  },
});
