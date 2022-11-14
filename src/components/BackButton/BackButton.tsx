import {StyleSheet, TouchableHighlight} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {BackArrow} from '../Icons';

export default function BackButton() {
  const navigation = useNavigation();

  return (
    <TouchableHighlight
      onPress={() => {
        navigation.goBack();
      }}
      style={styles.wrapper}>
      <BackArrow />
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    zIndex: 99,
    height: 50,
    width: 50,
    backgroundColor: '#9C9C9C',
    position: 'absolute',
    top: 50,
    opacity: 0.6,
    left: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
});
