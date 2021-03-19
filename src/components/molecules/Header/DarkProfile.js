import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1} from '../../../assets';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';

const DarkProfile = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.content}>
        <Text style={styles.name}>Alexander Jannie</Text>
        <Text style={styles.desc}>Dokter Anak</Text>
      </View>
      <Image source={DummyDoctor1} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    paddingVertical: 30,
    paddingLeft: 20,
    paddingRight: 16,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  name: {
    color: colors.white,
    fontSize: 20,
    fontFamily: fonts.primary[600],
    textAlign: 'center',
    // flex: 1,
  },
  desc: {
    color: colors.text.subTitle,
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    textAlign: 'center',
    marginTop: 6,
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
