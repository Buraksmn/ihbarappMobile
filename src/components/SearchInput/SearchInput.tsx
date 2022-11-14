import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {SearchIcon} from '../Icons';

const SearchInput = () => {
  return (
    <View style={styles.wrapper}>
      <SearchIcon />
      <TextInput style={styles.field} />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  wrapper: {
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,

    elevation: 10,
    marginTop: 10,
    paddingHorizontal: 8,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
  },
  field: {
    paddingVertical: 10,
    flex: 1,
    paddingLeft: 5,
    fontSize: 14,
  },
});
