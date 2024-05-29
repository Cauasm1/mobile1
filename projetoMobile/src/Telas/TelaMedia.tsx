
import React, { useState } from 'react';
import { Alert, Keyboard, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';

const Media = () => {
    const [nome, setNome] = useState('');
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');

    function calcMedia(nome: String, n1: string, n2: string) {
        let nota1 = Number.parseFloat(n1)
        let nota2 = Number.parseFloat(n2)
        let media = (nota1 + nota2) / 2;

        if ((media >= 7 && nota1 < 10) || (media >= 70 && nota1 > 10)) {
            Alert.alert('Resultado final', 'O aluno ' + nome + ' tem a média de ' + media + ' e foi aprovado')
        } else {
            Alert.alert('Resultado final', 'O aluno ' + nome + ' tem a média de ' + media + ' e foi reprovado')
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View >
                <View >
                    <Text >
                        Calculadora de notas
                    </Text>
                    <Text>
                        Nome:
                    </Text>
                    <TextInput placeholder='Digite seu nome' onChangeText={(text) => [setNome(text)]} />
                    <Text>
                        Nota 1:
                    </Text>
                    <TextInput placeholder='Digite sua nota' onChangeText={(text) => [setN1(text)]} />
                    <Text>
                        Nota 2:
                    </Text>
                    <TextInput placeholder='Digite sua nota' onChangeText={(text) => [setN2(text)]} />
                    <Pressable style={(state) => [state.pressed ? { opacity: 0.5 } : null]} onPress={() => [nome === '' || n1 === '' || n2 === '' ? Alert.alert('Atenção', 'Há campos em branco, favor preencher.') : calcMedia(nome, n1, n2)]}>
                        <Text>Calcular</Text>
                    </Pressable>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

export default Media;

