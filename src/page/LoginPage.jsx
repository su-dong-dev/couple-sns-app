import React from 'react';
import {Text, View, Pressable} from 'react-native';

const LoginPage = ({value, onPress}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Login: {value}</Text>
      <Pressable onPress={onPress}>
        <Text>login!</Text>
      </Pressable>
    </View>
  );
};

export default LoginPage;
