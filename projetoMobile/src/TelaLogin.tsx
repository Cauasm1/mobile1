import React, { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

const TelaLogin = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function log() {
        console.log('Email:' + email + '\nSenha: ' + senha)
    }

    return (
        <>
            <View style={styles.container}>
                <Image source={{ uri: 'https:cdn-icons-png.flaticon.com/512/4675/4675159.png' }} style={styles.imagem} />
                <TextInput placeholder='Digite seu email' />
                <TextInput placeholder='Digite sua senha' />
            </View>

            <Text style={styles.btnText}>Clicar</Text >
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#007FFF',
        alignItems: 'center'
    },
    imagem: {
        width: 100,
        height: 100
    },
    btnText: {
        width: 200,
        height: 50,
        alignItems: 'center',
        marginTop: 10,
        backgroundColor: 'white'
    }

})

export default TelaLogin;