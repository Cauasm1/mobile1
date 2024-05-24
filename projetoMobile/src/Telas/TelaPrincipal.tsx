import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Image, Alert } from 'react-native';
import { PrincipalProps } from '../navigation/HomeNavigator';

const TelaPrincipal = ({ navigation, route }: PrincipalProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Bem Vindo</Text>

            <Pressable
            style={(state) => []}

        </View>
    );
}

export default TelaPrincipal;