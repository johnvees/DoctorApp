import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, InputChat} from '../../components';
import {colors, fonts} from '../../utils';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title="Alexander Jannie"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Jumat, 19 Maret 2021</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <InputChat />
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary.regular,
    color: colors.text.secondary,
    textAlign: 'center',
    marginVertical: 20,
  },
});
