import React from 'react';
import {Text, View, Pressable, StyleSheet, Image} from 'react-native';
import FullButton from '../component/button/FullButton';
import FullInput from '../component/input/FullInput';

const LoginPage = ({value, onPress}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
      }}>
      <Image
        style={{
          width: 100,
          height: 100,
          marginBottom: 20,
        }}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <FullInput nameProps="사용자 이름 또는 이메일" />
      <FullInput nameProps="비밀번호" styleProps={{marginTop: 10}} />

      <View style={style.forgotPassword}>
        <Text style={style.linkForgotPassword}>비밀번호를 잊으셨나요?</Text>
      </View>
      <View style={{flexDirection: 'row-reverse', width: '100%'}}>
        <FullButton name="로그인" />
      </View>
    </View>
  );
};

export default LoginPage;

const style = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    padding: 5,
    paddingRight: 0,
    marginTop: 10,
    marginBottom: 15,
    flexDirection: 'row-reverse',
  },
  linkForgotPassword: {
    color: '#cb9ca1',
  },
});
