import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Bell} from '../Icons';
import useUser from '../../hooks/useUser';

export default function UserHeading() {
  const {user} = useUser();
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Image
        style={{borderRadius: 100, borderWidth: 1, borderColor: 'white'}}
        source={{
          width: 35,
          height: 35,
          uri: user?.profileImage,
        }}
      />

      <View>
        <TouchableOpacity>
          <Bell />
        </TouchableOpacity>
      </View>
    </View>
  );
}
