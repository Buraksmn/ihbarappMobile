import {Button, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import ScreenLayout from '../Layout/ScreenLayout';
import useUser from '../hooks/useUser';

const ProfileScreen = () => {
  const {login, logout, user} = useUser();
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  return (
    <ScreenLayout>
      {!user ? (
        <View>
          <TextInput
            value={form.email}
            onChangeText={text => {
              setForm({
                ...form,
                email: text,
              });
            }}
            placeholder="Email"
            style={styles.textField}
          />
          <TextInput
            placeholder="Password"
            style={styles.textField}
            value={form.password}
            onChangeText={text => {
              setForm({
                ...form,
                password: text,
              });
            }}
          />

          <Button
            title="Giris Yap"
            onPress={() => {
              login(form);
            }}
          />
        </View>
      ) : (
        <Button
          title="Çıkış Yap"
          onPress={() => {
            logout();
          }}
        />
      )}
    </ScreenLayout>
  );
};

const styles = StyleSheet.create({
  textField: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.62,

    elevation: 10,
    marginTop: 10,
  },
});

export default ProfileScreen;
