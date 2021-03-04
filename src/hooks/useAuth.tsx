/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { login } from '../services/auth';
import { createToken, deleteToken } from '../services/deviceToken';
import api from '../services/api';

interface User {
  id: string;
  name: string;
  email: string;
  bookmarks: []
}

interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  token: string;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider = ({ children }: any): JSX.Element => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const token = await AsyncStorage.getItem('@Sabia:token');
      const user = await AsyncStorage.getItem('@Sabia:user');

      if (token && user) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        setData({ token, user: JSON.parse(user) });
      }

      setLoading(false);
    }

    const registerForPushNotifications = async () => {
      try {
        const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
        if (!permission.granted) return;

        const deviceToken = await Notifications.getExpoPushTokenAsync();
        const deviceUID = Constants.deviceId || '';

        await AsyncStorage.setItem('@Sabia:deviceUID', deviceUID);
        await AsyncStorage.setItem('@Sabia:deviceToken', deviceToken.data);
        await AsyncStorage.setItem('@Sabia:deviceTokenType', deviceToken.type);
      } catch (error) {
        console.log('Error getting the device token', error);
      }
    };

    loadStoragedData();
    registerForPushNotifications();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await login(email, password);

    const deviceUID = await AsyncStorage.getItem('@Sabia:deviceUID');
    const deviceToken = await AsyncStorage.getItem('@Sabia:deviceToken');

    if (response && response.token) {
      const { token, user } = response;

      try {
        if (deviceUID && deviceToken) createToken(deviceUID, deviceToken);
      } catch (error) {
        console.log('Error saving device token', error);
      }

      await AsyncStorage.multiSet([
        ['@Sabia:token', token],
        ['@Sabia:user', JSON.stringify(user)],
      ]);

      setData(response);
    }
  }, []);

  const signOut = useCallback(async () => {
    const deviceUID = await AsyncStorage.getItem('@Sabia:deviceUID');

    if (deviceUID) deleteToken(deviceUID);

    await AsyncStorage.multiRemove([
      '@Sabia:token',
      '@Sabia:user',
    ]);

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      await AsyncStorage.setItem('@Sabia:user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [setData, data.token],
  );

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        token: data.token,
        loading,
        signIn,
        signOut,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
