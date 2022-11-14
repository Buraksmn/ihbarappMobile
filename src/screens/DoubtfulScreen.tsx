import {Text} from 'react-native';

import React from 'react';
import DoubtfulContainer from '../containers/DoubtfulContainer/DoubtfulContainer';
import InformationCard from '../components/InformationCard/InformationCard';
import ScreenLayout from '../Layout/ScreenLayout';
import SearchInput from '../components/SearchInput/SearchInput';

export default function DoubtfulScreen() {
  return (
    <ScreenLayout>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          fontWeight: '500',
          marginBottom: 20,
        }}>
        Bildirilen Şüpheli araç ihbarları
      </Text>

      <SearchInput />

      <InformationCard
        title="Şüpheli İlanlar Nedir ?"
        value={
          'Kullanıcılarımızın herhangibir yerde görüp çalıntı olabilecegini düşündügü ilanlardır. '
        }
      />
      <DoubtfulContainer />
    </ScreenLayout>
  );
}
