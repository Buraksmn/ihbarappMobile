import {View} from 'react-native';
import React from 'react';
import TitleRow from '../../components/TitleRow/TitleRow';
import AdvertCard from '../../components/AdvertCard/AdvertCard';
import {useNavigation} from '@react-navigation/native';
import {TabStackParams} from '../../Routers/TabStack';

interface IDoubtfulContainerProps {
  limit?: number;
  hideTitleRow?: boolean;
}

const DoubtfulContainer: React.FC<IDoubtfulContainerProps> = ({
  hideTitleRow = false,
}) => {
  const {navigate} = useNavigation();
  return (
    <View>
      {!hideTitleRow && (
        <TitleRow
          label="Tümünü Gör"
          title="Şüpeli Araçlar"
          onPress={() => {
            navigate('Doubtful');
          }}
        />
      )}
      <AdvertCard />
    </View>
  );
};
export default DoubtfulContainer;
