import { useState, useEffect } from "react";
import { Alert, Pressable, FlatList, StyleSheet, Text, View } from "react-native";

import firestore from "@react-native-firebase/firestore";
import { INotas } from "../model/INotas";
import { ConClienteProps } from "../navigation/HomeNavigator";
import Carregamento from "../Carregamento";

type ItemNotaProps = {
    numero: number,
    nota: INotas;
    onAlterar: (id: string) => void;
    onDeletar: (id: string) => void;
}

const ItemNota = (props: ItemNotaProps) => {

    return (
        <View style={styles.card}>
            <View style={styles.dados_card}>

                <Text style={{ fontSize: 35 }}>
                    {props.numero + 1 + ' - ' + props.nota.nome}
                </Text>

                <Text style={{ fontSize: 35 }}>
                    {props.numero + 1 + ' - ' + props.nota.cpf}
                </Text>

                <Text style={{ fontSize: 35 }}>
                    {props.numero + 1 + ' - ' + props.nota.rua}
                </Text>

                <Text style={{ fontSize: 35 }}>
                    {props.numero + 1 + ' - ' + props.nota.numero}
                </Text>

                <Text style={{ fontSize: 35 }}>
                    {props.numero + 1 + ' - ' + props.nota.bairro}
                </Text>

                <Text style={{ fontSize: 35 }}>
                    {props.numero + 1 + ' - ' + props.nota.complemento}
                </Text>

                <Text style={{ fontSize: 35 }}>
                    {props.numero + 1 + ' - ' + props.nota.estado}
                </Text>

                <Text style={{ fontSize: 35 }}>
                    {props.numero + 1 + ' - ' + props.nota.datanasc}
                </Text>

            </View>

            <View style={styles.botao_alterar}>
                <Pressable
                    onPress={() => props.onAlterar(props.nota.id!)}>
                    <Text style={styles.texto_botao_card}>
                        A
                    </Text>
                </Pressable>
            </View>

            <View style={styles.botao_deletar}>
                <Pressable
                    onPress={() => props.onDeletar(props.nota.id!)}>
                    <Text style={styles.texto_botao_card}>
                        X
                    </Text>
                </Pressable>
            </View>
        </View>
    );
}

const TelaConNotas = ({ navigation, route }: ConClienteProps) => {
    const [notas, setNotas] = useState([] as INotas[]);
    const [isCarregando, setIsCarregando] = useState(false);

    useEffect(() => {
        setIsCarregando(true);

        const subscribe = firestore()
            .collection('notas')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                }) as INotas[];

                setNotas(data);
                setIsCarregando(false);
            });

        return () => subscribe();
    }, []);

    function alterarNota(id: string) {
        navigation.navigate("TelaAltCliente", { id: id })
    }

    function deletarNota(id: string) {
        setIsCarregando(true);

        firestore()
            .collection('notas')
            .doc(id)
            .delete()
            .then(() => {
                Alert.alert("Nota", "Removido com sucesso")
            })
            .catch((error) => console.log(error))
            .finally(() => setIsCarregando(false));
    }

    return (
        <View style={styles.container}>
            <Carregamento isCarregando={isCarregando} />

            <Text style={styles.titulo}>Lista de Clientes</Text>
            <FlatList
                data={notas}
                renderItem={(info) =>
                    <ItemNota numero={info.index} nota={info.item} onAlterar={alterarNota} onDeletar={deletarNota} />}>
            </FlatList>
            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                onPress={() => { navigation.navigate('TelaPrincipal') }}>
                <Text style={styles.desc_botao}>Voltar</Text>
            </Pressable>
        </View>
    );
}

export default TelaConNotas;

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
    card: {
        borderWidth: 2,
        borderColor: 'grey',
        margin: 5,
        borderRadius: 10,
        padding: 3,
        flexDirection: 'row',
        backgroundColor: 'white'
    },
    dados_card: {
        flex: 1
    },
    botao_deletar: {
        backgroundColor: 'red',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    botao_alterar: {
        backgroundColor: 'yellow',
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    texto_botao_card: {
        fontWeight: 'bold',
        fontSize: 40,
        color: 'black'
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