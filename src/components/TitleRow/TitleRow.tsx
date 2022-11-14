import {View, Text, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from './TitleRow.style';

export default function TitleRow({
  onPress,
  label,
  title,
}: {
  onPress: () => void;
  label: string;
  title: String;
}) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{title}</Text>
      <TouchableHighlight onPress={() => onPress()}>
        <Text>{label}</Text>
      </TouchableHighlight>
    </View>
  );
}
