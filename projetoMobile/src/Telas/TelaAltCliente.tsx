import { useEffect, useState } from "react";
import { Alert, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

import Firestore from "@react-native-firebase/firestore";
import { AltClienteProps } from "../navigation/HomeNavigator";
import Carregamento from "../Carregamento";
import { INotas } from "../model/INotas";

const TelaAltCliente = ({ navigation, route }: AltClienteProps) => {
    const [id,] = useState(route.params.id);
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

    async function caregar() {
        setIsCarregando(true);
        const resultado = await Firestore()
            .collection('cliente')
            .doc(id)
            .get();

        const cliente = {
            id: resultado.id,
            ...resultado.data()
        } as INotas;

        setNome(cliente.nome);
        setCpf(cliente.cpf);
        setRua(cliente.rua);
        setNumero(cliente.numero);
        setBairro(cliente.bairro);
        setComplemento(cliente.complemento);
        setCidade(cliente.cidade);
        setEstado(cliente.estado);
        setDataNasc(cliente.datanasc);
        setIsCarregando(false);
    };

    useEffect(() => {
        caregar();
    }, []);

    function alterar() {
        setIsCarregando(true);

        Firestore()
            .collection('cliente')
            .doc(id)
            .update({
                nome: nome,
                cpf: cpf,
                rua: rua,
                numero: numero,
                bairro: bairro,
                complemento: complemento,
                cidade: cidade,
                estado: estado,
                datanasc: datanasc,
                created_at: Firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                Alert.alert("Cliente", "Alterado com sucesso")
                navigation.goBack();
            })
            .catch((error) => console.log(error))
            .finally(() => setIsCarregando(false));
    }
    return (
        <View
            style={styles.container}>
            <Carregamento isCarregando={isCarregando} />

            <ScrollView>

                <Text
                    style={styles.titulo}>Alterar Cliente</Text>

                <Text
                    style={styles.desc_caixa_texto}>
                    Nome
                </Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={nome}
                    onChangeText={(text) => { setNome(text) }} />

                <Text
                    style={styles.desc_caixa_texto}>
                    CPF
                </Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={cpf}
                    onChangeText={(text) => { setCpf(text) }} />

                <Text
                    style={styles.desc_caixa_texto}>
                    Rua
                </Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={rua}
                    onChangeText={(text) => { setCpf(text) }} />

                <Text
                    style={styles.desc_caixa_texto}>
                    Numero
                </Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={numero}
                    onChangeText={(text) => { setCpf(text) }} />

                <Text
                    style={styles.desc_caixa_texto}>
                    Bairro
                </Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={bairro}
                    onChangeText={(text) => { setBairro(text) }} />

                <Text
                    style={styles.desc_caixa_texto}>
                    Complemento
                </Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={complemento}
                    onChangeText={(text) => { setComplemento(text) }} />

                <Text
                    style={styles.desc_caixa_texto}>
                    Cidade
                </Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={cidade}
                    onChangeText={(text) => { setCidade(text) }} />

                <Text
                    style={styles.desc_caixa_texto}>
                    Estado
                </Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={estado}
                    onChangeText={(text) => { setEstado(text) }} />

                <Text
                    style={styles.desc_caixa_texto}>
                    Data de nascimento
                </Text>
                <TextInput
                    style={styles.caixa_texto}
                    value={datanasc}
                    onChangeText={(text) => { setDataNasc(text) }} />

                <Pressable
                    style={styles.botao}
                    onPress={() => alterar()}
                    disabled={isCarregando}>
                    <Text style={styles.desc_botao}>Alterar</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}

export default TelaAltCliente;

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
    caixa_texto: {
        width: '80%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        backgroundColor: 'white'
    },
    desc_caixa_texto: {
        fontSize: 18
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
})