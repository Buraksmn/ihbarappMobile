import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {flexDirection: 'row', marginTop: 20},
  rightWidget: {
    backgroundColor: 'white',
    height: 75,
    flex: 1,
    marginLeft: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#dfe4ea',
    borderWidth: 1,
  },

  leftWidget: {
    backgroundColor: 'white',
    height: 75,
    flex: 1,
    marginRight: 5,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#dfe4ea',
    borderWidth: 1,
  },

  value: {fontSize: 18, fontWeight: '500'},
  label: {fontSize: 12, fontWeight: '500'},
});

export default styles;
