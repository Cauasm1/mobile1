import { useState } from "react";
import { Alert, Text, TextInput, View, StyleSheet, Pressable } from "react-native";

import firestore from "@react-native-firebase/firestore";
import Carregamento from "../Carregamento";
import { CadNotasProps } from "../navigation/HomeNavigator";
import { INotas } from "../model/INotas";

const TelaCadNotas = ({ navigation, route }: CadNotasProps) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isCarregando, setIsCarregando] = useState(false);

    function Cadastrar() {
        setIsCarregando(true);

        if (verificaCampos()) {
            let nota = {
                titulo: titulo,
                descricao: descricao,
                created_at: firestore.FieldValue.serverTimestamp()
            } as INotas;

            firestore()
                .collection('notas')
                .add(nota)
                .then(() => {
                    Alert.alert("Nota", "Cadastrada com sucesso")
                    navigation.navigate('TelaPrincipal')
                })
                .catch((error) => console.log(error))
                .finally(() => setIsCarregando(false));
        }
        setIsCarregando(false);
    }
    function verificaCampos() {
        if (titulo == "") {
            Alert.alert("Titulo em branco", "Digite uma descrição da nota")
            return false;
        }
        return true;
    }
    return (
        <View>
            <Carregamento isCarregando={isCarregando} />
            <Text>Titulo</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setTitulo(text) }} />
            <Text>Descrição</Text>
            <TextInput multiline numberOfLines={4} maxLength={100} style={styles.caixa_texto}
                onChangeText={(text) => { setDescricao(text) }} />
            <Pressable style={styles.botao} onPress={() => Cadastrar()} disabled={isCarregando}>
                <Text style={styles.desc_botao}>Cadastrar</Text>
            </Pressable>
        </View >
    )
}

export default TelaCadNotas;

const styles = StyleSheet.create({
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        backgroundColor: 'white'
    },
    botao: {
        elevation: 5,
        backgroundColor: "#0066ff",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        minWidth: 110
    },
    desc_botao: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    }
});