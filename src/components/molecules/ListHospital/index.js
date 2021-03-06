import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { DummyHospital1 } from '../../../assets';
import { colors, fonts } from '../../../utils';

const ListHospital = () => {
    return (
        <View style = {styles.container}>
            <Image source = {DummyHospital1} style = {styles.image}/>
            <View>
                <Text style = {styles.title}>Rumah Sakit</Text>
                <Text style = {styles.title}>Citra Bunga Merdeka</Text>
                <Text style = {styles.address}>Jl. Surya Sejahtera 20</Text>
            </View>
        </View>
    );
};

export default ListHospital;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
    },
    image: {
        width: 80,
        height: 60,
        borderRadius: 11,
        marginRight: 16,
    },
    title: {
        fontSize: 16,
        fontFamily: fonts.primary.regular,
        color: colors.text.primary,
    },
    address: {
        fontSize: 12,
        fontFamily: fonts.primary[300],
        color: colors.text.secondary,
        marginTop: 6,
    },
});
