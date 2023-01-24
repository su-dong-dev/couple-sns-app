/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BottomTabs from './component/BottomTabs';
import {NavigationContainer} from '@react-navigation/native';
import LoginPage from './page/LoginPage';
const App = () => {
  const [login, setLogin] = useState(1);
  const loginOnPress = () => {
    setLogin(login + 1);
  };
  return (
    <NavigationContainer>
      {login < 5 ? (
        <LoginPage value={login} onPress={loginOnPress} />
      ) : (
        <BottomTabs />
      )}
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hello: {
    color: 'red',
  },
});

export default App;
