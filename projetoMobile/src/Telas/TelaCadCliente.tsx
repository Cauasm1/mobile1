import { useState } from "react";
import { Alert, Text, TextInput, View, StyleSheet, Pressable, ScrollView } from "react-native";

import firestore from "@react-native-firebase/firestore";
import Carregamento from "../Carregamento";
import { CadClienteProps } from "../navigation/HomeNavigator";
import { INotas } from "../model/INotas";

const TelaCadCliente = ({ navigation, route }: CadClienteProps) => {
    const [nome, setNome] = useState('');
    const [cpf, setCpf] = useState('');
    const [rua, setRua] = useState('');
    const [numero, setNumero] = useState('');
    const [bairro, setBairro] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cidade, setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [datanasc, setDataNasc] = useState('');
    const [isCarregando, setIsCarregando] = useState(false);

    function Cadastrar() {
        setIsCarregando(true);

        if (verificaCampos()) {
            let nota = {
                nome: nome,
                cpf: cpf,
                rua: rua,
                numero: numero,
                bairro: bairro,
                complemento: complemento,
                cidade: cidade,
                estado: estado,
                datanasc: datanasc,
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
        if (nome == "") {
            Alert.alert("Nome em branco")
            return false;
        }
        if (cpf == "") {
            Alert.alert("CPF em branco")
            return false;
        }
        if (rua == "") {
            Alert.alert("Rua em branco")
            return false;
        }
        if (numero == "") {
            Alert.alert("Número da rua em branco")
            return false;
        }
        if (bairro == "") {
            Alert.alert("Bairro em branco")
            return false;
        }
        if (complemento == "") {
            Alert.alert("Complemento em branco")
            return false;
        }
        if (cidade == "") {
            Alert.alert("Cidade em branco")
            return false;
        }
        if (estado == "") {
            Alert.alert("Estado em branco")
            return false;
        }
        if (datanasc == "") {
            Alert.alert("Data de nascimento em branco")
            return false;
        }
        return true;
    }
    return (
        <View style={styles.container}>

            <Carregamento isCarregando={isCarregando} />

            <ScrollView >

                <Text style={styles.titulo}>Cadastrar Cliente</Text>

                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setNome(text) }} />

                <Text style={styles.label}>CPF</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setCpf(text) }} />

                <Text style={styles.label}>Rua</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setRua(text) }} />

                <Text style={styles.label}>Número da rua</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setNumero(text) }} />

                <Text style={styles.label}>Bairro</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setBairro(text) }} />

                <Text style={styles.label}>Complemento</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setComplemento(text) }} />

                <Text style={styles.label}>Cidade</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setCidade(text) }} />

                <Text style={styles.label}>Estado</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setEstado(text) }} />

                <Text style={styles.label}>Data de Nascimento</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setDataNasc(text) }} />

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                    onPress={() => Cadastrar()} disabled={isCarregando}>
                    <Text style={styles.desc_botao}>Cadastrar</Text>
                </Pressable>

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                    onPress={() => { navigation.navigate('TelaPrincipal') }}>
                    <Text style={styles.desc_botao}>Voltar</Text>
                </Pressable>

            </ScrollView>
        </View >
    )
}

export default TelaCadCliente;

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
        color: '#222',
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 5,
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
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    }
});