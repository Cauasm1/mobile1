// 1- Faça um componente que seja uma tela e que possua uma caixa de texto e um botão. Ao pressionar o botão calcule e exiba todos os números maiores que zero e menores que o número preenchido na caixa de texto que sejam divisíveis pelo número 3.
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from 'react-native';
import { PrimeiraProps } from '../navigation/HomeNavigator';


const PrimeiraTela = ({ navigation, route }: PrimeiraProps) => {
    const [numero, setNumero] = useState(0);
    let numArray: number[] = [];

    function Calcular() {
        numArray = [];
        if (numero > 0) {
            let num = 1;
            while (num != numero + 1) {
                if (num % 3 == 0) {
                    numArray.push(num);
                }
                num++;
            }
        } else {
            Alert.alert('Numero invalido');
        }
        Alert.alert(numArray.toString());
    }
    return (
        <View style={styles.container}>
            <Text
                style={styles.titulo_caixa_texto}>
                Digite um numero
            </Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setNumero(Number.parseInt(text)) }} />
            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { Calcular() }}>
                <Text style={styles.desc_botao}>Calcular</Text>
            </Pressable>
            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TerceiraTela') }}>
                <Text style={styles.desc_botao}>Voltar</Text>
            </Pressable>
        </View>
    )
}

export default PrimeiraTela;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#00FFFF'
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
})
