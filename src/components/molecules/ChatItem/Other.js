import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyDoctor1} from '../../../assets';
import {colors, fonts} from '../../../utils';

const Other = () => {
  return (
    <View>
      <View style={styles.container}>
        <Image source={DummyDoctor1} style={styles.avatar} />
        <View>
          <View style={styles.chatContent}>
            <Text style={styles.text}>
              Ibu dokter, apakah memakan jeruk tiap hari itu buruk?
            </Text>
          </View>
          <Text style={styles.date}>4.20 AM</Text>
        </View>
      </View>
    </View>
  );
};

export default Other;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingLeft: 16,
    flexDirection: 'row',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    marginRight: 12,
  },
  chatContent: {
    maxWidth: '80%',
    padding: 12,
    paddingRight: 18,
    backgroundColor: colors.primary,
    borderRadius: 10,
    borderBottomLeftRadius: 0,
  },
  text: {
    fontSize: 14,
    fontFamily: fonts.primary.regular,
    color: colors.white,
  },
  date: {
    fontSize: 11,
    fontFamily: fonts.primary.regular,
    color: colors.text.secondary,
    marginTop: 8,
  },
});
