const {View, Image, Text, StyleSheet} = require('react-native');

const UserInfo = ({userName = 'donghyun'}) => {
  return (
    <View style={style.container}>
      <Image style={style.image} source={require('../asserts/iu.jpeg')} />
      <Text style={style.text}>{userName}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  text: {
    marginLeft: 10,
  },
});

export default UserInfo;
