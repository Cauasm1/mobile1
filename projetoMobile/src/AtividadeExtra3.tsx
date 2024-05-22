import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

const Texto = () => {
    return (
        <View style={styles.container}>
            <View style={styles.container_titulo}>
                <Text
                    style={styles.titulo_caixa_texto}>
                </Text>
                <TextInput
                    style={styles.caixa_texto}>
                </TextInput>
            </View>
        </View>
    );
}

export default Texto;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFACD'
    },
    container_titulo: {
        flex: 2,
        alignItems: 'center'
    },
    titulo_caixa_texto: {
        fontSize: 25,
        color: 'black'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        backgroundColor: 'white'
    },

});
