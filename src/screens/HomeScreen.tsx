import React from 'react';
import {ScrollView} from 'react-native';
import InformationWidget from '../components/InformationWidget/InformationWidget';
import SearchInput from '../components/SearchInput/SearchInput';
import DoubtfulContainer from '../containers/DoubtfulContainer/DoubtfulContainer';
import NearMeContainer from '../containers/NearMeContainer/NearMeContainer';
import StolenContainer from '../containers/StolenContainer/StolenContainer';
import ScreenLayout from '../Layout/ScreenLayout';

export default function HomeScreen() {
  return (
    <ScreenLayout>
      <ScrollView>
        <InformationWidget />
        <SearchInput />
        <NearMeContainer />
        <StolenContainer limit={3} />
        <DoubtfulContainer limit={3} />
      </ScrollView>
    </ScreenLayout>
  );
}
