import {SafeAreaView, View} from 'react-native';
import {StyleSheet} from 'react-native';

import React from 'react';
import UserHeading from '../components/UserHeading/UserHeading';
import useUser from '../hooks/useUser';

interface IScreenLayoutProps {
  children: React.ReactNode;
}

const ScreenLayout: React.FC<IScreenLayoutProps> = ({children}) => {
  const {user} = useUser();
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.view}>
        {user && <UserHeading />}
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginHorizontal: 10,
  },
  safeArea: {
    flex: 1,
  },
});

export default ScreenLayout;
