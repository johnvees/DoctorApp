import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts } from '../../../utils';
import { colors } from '../../../utils/colors';
import { Button, Gap } from '../../atoms';

const Header = ({title, onPress}) => {
    return (
        <View style = {styles.container}>
            <Button type = 'icon-only' icon = 'back-dark' onPress = {onPress} />
            <Text style = {styles.text}>{title}</Text>
            <Gap width = {24} />
        </View>
    );
};

export default Header;

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16,
        paddingVertical: 30,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontFamily: fonts.primary[600],
        color: colors.text.primary,
        textAlign: 'center',
        flex: 1,
    },
});
