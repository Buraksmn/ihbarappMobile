import {View} from 'react-native';
import React from 'react';
import TitleRow from '../../components/TitleRow/TitleRow';
import AdvertCard from '../../components/AdvertCard/AdvertCard';
import {useNavigation} from '@react-navigation/native';

interface IStolenContainerProps {
  limit?: number;
  hideTitleRow?: boolean;
}
const StolenContainer: React.FC<IStolenContainerProps> = ({
  hideTitleRow = false,
}) => {
  const {navigate} = useNavigation();

  return (
    <View>
      {!hideTitleRow && (
        <TitleRow
          label="Tümünü Gör"
          title="Çalıntı Araçlar"
          onPress={() => {
            navigate('Stolen');
          }}
        />
      )}

      <AdvertCard />
    </View>
  );
};
export default StolenContainer;
