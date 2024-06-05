import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';
import ListaFlat from '../ListaFlat';

const TelaPrincipal = ({ navigation, route }: PrincipalProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem Vindo!</Text>
            <Text style={styles.label}>Menu</Text>

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TelaCadCliente') }}>
                <Text style={styles.desc_botao}>Cadastrar Clientes</Text>
            </Pressable>

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TelaConCliente') }}>
                <Text style={styles.desc_botao}>Consultar Clientes</Text>
            </Pressable>

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TelaCadAtendimento') }}>
                <Text style={styles.desc_botao}>Cadastro de Atendimento</Text>
            </Pressable>

            {/* <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TelaMedia') }}>
                <Text style={styles.desc_botao}>Media</Text>
            </Pressable> */}

            {/* <ListaFlat /> */}
        </View>
    )
}

export default TelaPrincipal;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FFFF'
    },
    titulo: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000000',
        paddingBottom: 50
    },
    label: {
        textAlign: 'center',
        color: '#222',
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 5,
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