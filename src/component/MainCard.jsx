const {View} = require('react-native');
const {default: UserInfo} = require('./UserInfo');

const MainCard = () => {
  return (
    <View>
      <UserInfo />
    </View>
  );
};

export default MainCard;
