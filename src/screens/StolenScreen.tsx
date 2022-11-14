import {Text} from 'react-native';

import React from 'react';
import StolenContainer from '../containers/StolenContainer/StolenContainer';
import InformationCard from '../components/InformationCard/InformationCard';
import ScreenLayout from '../Layout/ScreenLayout';
import SearchInput from '../components/SearchInput/SearchInput';

export default function StolenScreen() {
  return (
    <ScreenLayout>
      <Text
        style={{
          textAlign: 'center',
          fontSize: 16,
          fontWeight: '500',
          marginBottom: 20,
        }}>
        Bildirilen Çalıntı Araç İlanları
      </Text>

      <SearchInput />

      <InformationCard
        title="Çalıntı İlanlar Nedir ?"
        value={
          'Sahibi oldukları araçların çalınması durumunda kullanıcıların oluşturdugu ilanlardır.'
        }
      />
      <StolenContainer />
    </ScreenLayout>
  );
}
