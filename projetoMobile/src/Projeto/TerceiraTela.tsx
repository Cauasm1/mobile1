// 3- Faça um componente que seja uma “tela inicial” que contenha 2 botões que naveguem para os componentes dos exercícios 1 e 2.

import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from 'react-native';

import auth from "@react-native-firebase/auth";
import { TerceiraProps } from '../navigation/HomeNavigator';

const TerceiraTela = ({ navigation, route }: TerceiraProps) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tela Inicial</Text>
            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('PrimeiraTela') }}>
                <Text style={styles.desc_botao}>Primeira Tela</Text>
            </Pressable>
            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('SegundaTela') }}>
                <Text style={styles.desc_botao}>Segunda Tela</Text>
            </Pressable>
        </View>
    );
}

export default TerceiraTela;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FFFF'
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000000',
        paddingBottom: 50
    },
    botao: {
        borderWidth: 3,
        marginVertical: 10,
        color: 'black',
        justifyContent: 'center',
        backgroundColor: '#00FA9A',
        paddingVertical: 10,
        paddingHorizontal: 30,
        marginTop: 20,
        borderRadius: 10
    },
    desc_botao: {
        fontSize: 20,
        color: 'white'
    }
});