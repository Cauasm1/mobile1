import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Aprovado = () => {

    const [nota1] = useState(0);
    const [nota2] = useState(0);
    const [nome] = useState('');

    const Calcular = () => {
        let resultado = ''
        if ((nota1 + nota2) / 2 >= 7) {

            resultado = 'parabens voce ' + nome + ' aprovado ' + (nota1 + nota2) / 2

        } else {
            resultado = 'Infelizmente o aluno  ' + nome + ' foi reprovado ' + (nota1 + nota2) / 2
        }
        Alert.alert(resultado);
    };

}

export default Aprovado;