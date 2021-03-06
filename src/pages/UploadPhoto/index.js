import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { IconAddPhoto, ILNullPhoto } from '../../assets';
import { Button, Gap, Header, Link } from '../../components';
import { colors, fonts } from '../../utils';

const UploadPhoto = ({onPress, navigation}) => {
    return (
        <View style = {styles.page}>
            <Header title = 'Upload Photo' onPress = {() => navigation.goBack()}/>
            <View style = {styles.content}>
                <View style = {styles.profile}>
                    <View style = {styles.avatarWrapper}>
                        <Image source = {ILNullPhoto} style = {styles.avatar} />
                        <IconAddPhoto style = {styles.addPhoto} />
                    </View>
                    <Gap height = {26} />
                    <Text style = {styles.name}>Yohanes Velly Sabattino</Text>
                    <Text style = {styles.profession}>Full-Stack Developer</Text>
                </View>
                <View>
                    <Button title = 'Upload and Continue' />
                    <Gap height = {30} />
                    <Link title = 'Skip for this' align = 'center' size= {16}/>
                </View>
            </View>
        </View>
    );
};

export default UploadPhoto;

const styles = StyleSheet.create({
    page: {
        backgroundColor: colors.white,
        flex: 1,
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        justifyContent: 'space-between',
    },
    profile: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    avatar: {
        width: 110,
        height: 110,
    },
    avatarWrapper: {
        width: 130,
        height:130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130/2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6,
    },
    name: {
        fontSize: 24,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign:'center',
    },
    profession: {
        fontSize: 18,
        color: colors.text.secondary,
        fontFamily: fonts.primary[400],
        textAlign: 'center',
        marginTop: 4,
    },
});
