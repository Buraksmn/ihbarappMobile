import {View} from 'react-native';
import React from 'react';
import TitleRow from '../../components/TitleRow/TitleRow';
import AdvertCard from '../../components/AdvertCard/AdvertCard';

interface INearMeContainerProps {
  limit?: number;
  hideTitleRow?: boolean;
}

const NearMeContainer: React.FC<INearMeContainerProps> = ({
  hideTitleRow = false,
}) => {
  return (
    <View>
      {!hideTitleRow && (
        <TitleRow label="" title="Yakınımdaki İlanlar" onPress={() => {}} />
      )}
      <AdvertCard />
    </View>
  );
};
export default NearMeContainer;
