import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import ListaFlat from '../ListaFlat';

const TelaPrincipal = ({ navigation, route }: PrincipalProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem Vindo</Text>

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TelaCadNotas') }}>
                <Text style={styles.desc_botao}>Cadastrar Nota</Text>
            </Pressable>

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TelaConNotas') }}>
                <Text style={styles.desc_botao}>Consultar Notas</Text>
            </Pressable>

            <ListaFlat />
        </View>
    )
}

export default TelaPrincipal;

const styles = StyleSheet.create({
    container: {

    },
    titulo: {

    },
    botao: {

    },
    desc_botao: {

    }
});