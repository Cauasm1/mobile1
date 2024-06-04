// Cadastro de atendimento (Cadastrar, listar). Com dados de cliente, data, hora e descrição do atendimento.(Criar validação para os campos. Ex: somente números, formato da data)
import { useEffect, useState } from "react";
import { Alert, Text, TextInput, View, StyleSheet, Pressable, ScrollView } from "react-native";

import firestore from "@react-native-firebase/firestore";
import Carregamento from "../Carregamento";
import { CadAtendimentoProps } from "../navigation/HomeNavigator";
import { INotas } from "../model/INotas";

const TelaCadAtendimento = ({ navigation, route }: CadAtendimentoProps) => {
    const [cliente, setCliente] = useState([] as INotas[]);
    const [isCarregando, setIsCarregando] = useState(false);

    useEffect(() => {
        setIsCarregando(true);

        const subscribe = firestore()
            .collection('cliente')
            .onSnapshot(querySnapshot => {
                const data = querySnapshot.docs.map(doc => {

                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                }) as INotas[];

                setCliente(data);
                setIsCarregando(false);
            });

        return () => subscribe();
    }, []);

    return (
        <View style={styles.container}>

            <Carregamento isCarregando={isCarregando} />

            <ScrollView >

                <Text style={styles.titulo}>Cadastrar Cliente</Text>

                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}

                    data={cliente}
                    search
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null]}
                    onPress={() => { navigation.navigate('TelaPrincipal') }}>
                    <Text style={styles.desc_botao}>Voltar</Text>
                </Pressable>

            </ScrollView>
        </View >
    )
}

export default TelaCadAtendimento;

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
