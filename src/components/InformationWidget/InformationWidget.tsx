import {View, Text} from 'react-native';
import React from 'react';
import styles from './InformationWidget.style';

export default function InformationWidget() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.leftWidget}>
        <Text style={styles.value}>120</Text>
        <Text style={styles.label}>Toplam Çalıntı Ihbarı</Text>
      </View>
      <View style={styles.rightWidget}>
        <Text style={styles.value}>12</Text>
        <Text style={styles.label}>Toplam Şüpeli İhbarı</Text>
      </View>
    </View>
  );
}
