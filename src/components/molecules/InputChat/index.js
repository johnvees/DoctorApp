import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const InputChat = () => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tulis pesan untuk Alexander"
      />
      <Button type="btn-icon-send" />
    </View>
  );
};

export default InputChat;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
  },
  input: {
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    maxHeight: 45,
    borderRadius: 10,
    padding: 14,
    marginRight: 10,
    backgroundColor: colors.disable,
    flex: 1,
  },
});
