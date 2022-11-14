import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function InformationCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <View style={{backgroundColor: '#fad390', padding: 20, marginVertical: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 10,
          borderRadius: 10,
        }}>
        <Text style={{fontWeight: '500'}}>{title}</Text>
        <TouchableOpacity>
          <Text style={{fontWeight: '500'}}>X</Text>
        </TouchableOpacity>
      </View>

      <Text style={{fontWeight: '300'}}>{value}</Text>
    </View>
  );
}
