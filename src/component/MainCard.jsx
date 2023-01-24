import {SliderBox} from 'react-native-image-slider-box';
import {View} from 'react-native';
import UserInfo from './UserInfo';

const MainCard = props => {
  const {
    images = [
      'https://image.bugsm.co.kr/artist/images/1000/800491/80049126.jpg',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-hIkefXesrRZDk78JfnPeJ11hQyA5TW8Hrg&usqp=CAU',
      require('../asserts/iu.jpeg'),
    ],
  } = props;

  return (
    <View>
      <UserInfo />
      <SliderBox images={images} />
    </View>
  );
};

export default MainCard;
