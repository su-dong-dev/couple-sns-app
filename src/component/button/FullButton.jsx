import {Pressable, StyleSheet, Text} from 'react-native';

const FullButton = ({
  name = 'Button {name} is required',
  onPressProps = () => {
    console.log('zz');
  },
}) => {
  return (
    <Pressable style={style.pressable}>
      <Text>{name}</Text>
    </Pressable>
  );
};

export default FullButton;

const style = StyleSheet.create({
  pressable: {
    width: '100%',
    flex: 1,
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cb9ca1',
  },
});
