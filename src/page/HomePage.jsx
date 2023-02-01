import React from 'react';
import {Text, ScrollView} from 'react-native';
import MainCard from '../component/MainCard';
import UserInfo from '../component/UserInfo';

const HomePage = () => {
  return (
    <ScrollView style={{flex: 1}}>
      <MainCard />
      <MainCard />
      <MainCard />
      <MainCard />
    </ScrollView>
  );
};

export default HomePage;
