import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSend, IconSendActive} from '../../../assets';
import {colors} from '../../../utils';

const ButtonIconSend = ({disable}) => {
  return (
    <View style={styles.container(disable)}>
      {disable && <IconSend />}
      {!disable && <IconSendActive />}
    </View>
  );
};

export default ButtonIconSend;

const styles = StyleSheet.create({
  container: (disable) => ({
    width: 45,
    height: 45,
    backgroundColor: disable ? colors.disable : colors.tertiary,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingBottom: 8,
    paddingLeft: 8,
  }),
});
