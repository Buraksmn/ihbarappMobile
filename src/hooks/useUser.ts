import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import db from '../service/DataBase.json';

const useUser = () => {
  const [user, setUser] = useState();

  const logout = async () => {
    await AsyncStorage.clear();
  };

  const login = async ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    const findU = db.users.find(
      u => u.email == email && u.password == password,
    );
    if (findU) {
      setUser(findU);
      try {
        const jsonValue = JSON.stringify(findU);
        await AsyncStorage.setItem('@user', jsonValue);
      } catch (e) {
        // saving error
      }
    }
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem('@user');
      if (value !== null) {
        setUser(JSON.parse(value));
      }
    } catch (e) {}
  };

  useEffect(() => {
    getData();
  }, [user]);

  return {
    login,
    user,
    setUser,
    logout: () => logout(),
  };
};

export default useUser;
