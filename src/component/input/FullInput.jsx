import {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const FullInput = ({nameProps = 'name is not null', styleProps = {}}) => {
  const [name, onChangeName] = useState('');

  return (
    <View style={[style.container, styleProps]}>
      <TextInput
        style={style.textInput}
        onChangeText={text => onChangeName(text)}
        placeholder={nameProps}
        value={name}
      />
    </View>
  );
};

export default FullInput;

const style = StyleSheet.create({
  container: {
    width: '100%',
  },

  textInput: {
    padding: 20,
    borderRadius: 5,
    borderWidth: 0.2,
    borderColor: '#ccb9bc',
    backgroundColor: '#ffebee',
    color: '#424242',
    flex: 1,
  },
});
