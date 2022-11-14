import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import React from 'react';
import BackButton from '../components/BackButton/BackButton';
import {Table, TableWrapper, Row} from 'react-native-table-component';
import Carousel from 'react-native-reanimated-carousel';

const DetailScreen = () => {
  const width = Dimensions.get('window').width;
  return (
    <View>
      <BackButton />
      <Carousel
        style={{height: 300}}
        width={width}
        data={[
          'https://www.ssmotors.com.tr/B2ELResim/AracResim2El/19616/9b272be1f95b451d93d3049efee416642312201919345197278_0.jpg',
          'https://st3.myideasoft.com/shop/bu/59/myassets/products/213/pr_01_26213.jpg?revision=1441279395',
          'https://raw.githubusercontent.com/dohooo/react-native-reanimated-carousel/HEAD/assets/home-banner.png',
        ]}
        renderItem={({index, item}) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
            }}>
            <Image
              style={{
                flex: 1,
                resizeMode: 'stretch',
              }}
              source={{
                uri: item,
              }}
            />
          </View>
        )}
      />
      <ScrollView
        style={{
          backgroundColor: 'white',
          height: '100%',
          bottom: 0,
          right: 0,
          left: 0,
          position: 'relative',
          paddingHorizontal: 30,
          paddingTop: 20,
          top: -20,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Text style={{fontWeight: '600', fontSize: 19, paddingBottom: 11}}>
          SİYAH 2019 R25
        </Text>

        <Text style={{fontWeight: '400', fontSize: 16, paddingBottom: 11}}>
          Merhaba Motorum İstanbul Başakşehir / Kayaşehirden saat 03:30 gibi
          çalınmıştır. Motorun sag ve sol grenajlarında çizikler vardır. Lütfen
          Görenlerin Bana ulaşmasını rica ediyorum. bulunmasına yardım edenlere
          5.000TL ödül verilecektir.
        </Text>

        <Table>
          <TableWrapper>
            <Row data={['Araç Sahibi', 'Burak Şaman']} />
            <Row data={['İlan Tarihi', '04.11.2022']} />
            <Row data={['İl', 'İstanbul']} />
            <Row data={['İlçe', 'Başahşehir']} />
            <Row data={['Marka', 'Yamaha']} />
            <Row data={['Model', 'R25']} />
            <Row data={['Yıl', '2021']} />
            <Row data={['Renk', 'Mavi']} />
            <Row data={['KM', '2.000']} />
            <Row data={['Motor No', '0123123123123']} />
            <Row data={['Şase No', '91923123']} />
          </TableWrapper>
        </Table>
        <View style={{paddingBottom: 70}}>
          <TouchableHighlight
            onPress={() => {}}
            style={{
              width: '100%',
              backgroundColor: '#2ecc71',
              padding: 10,
              borderRadius: 5,
              marginVertical: 10,
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontSize: 15,
                fontWeight: '700',
                color: 'white',
              }}>
              ARA
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailScreen;
