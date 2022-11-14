import {View, Text, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import styles from './AdvertCard.style';

//TODO: bu interface servisin responsesinden dinamik oluşturulabilir
// ör: interface IAdvertCardProps extens [responseType] {

interface IAdvertCardProps {
  image: string;
  title: string;
  county: string;
  make: string;
  model: string;
  date: string;
  time: string;
}

import {useNavigation} from '@react-navigation/native';

const AdvertCard: React.FC<IAdvertCardProps> = () => {
  const navigation = useNavigation();
  console.log('navigation :>> ', navigation);

  return (
    <TouchableHighlight onPress={() => navigation.navigate('Detail')}>
      <View style={styles.wrapper}>
        <Image
          style={styles.image}
          source={{
            width: 130,
            uri: 'https://i0.shbdn.com/photos/17/99/78/x5_1045179978p2b.jpg',
          }}
        />
        <View style={styles.informationGroup}>
          <Text style={styles.advertTitle}>R25 Başahşehirden gece Çalındı</Text>
          <Text>Başakşehir</Text>
          <Text>Marka : YAMAHA</Text>
          <Text>Model : R25</Text>
          <Text>Tarih : 01.02.2022</Text>
          <Text>Saat : 03:00</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};
export default AdvertCard;
