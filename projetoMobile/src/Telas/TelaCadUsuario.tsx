
import { Alert, Image, Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React, { useState } from 'react';
import auth from "@react-native-firebase/auth";
import { CadUsuarioProps } from '../navigation/HomeNavigator';
import Carregamento from '../Carregamento';

const Cadastro = ({ navigation }: CadUsuarioProps) => {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [isCarregando, setIsCarregando] = useState(false);

    function log() {
        console.log('Email: ' + email + '\nSenha: ' + senha + '\nConfirmação de Senha: ' + confirmaSenha)
    }

    function verificaCampos() {
        if (email == '') {
            Alert.alert('Email em branco', 'Digite um email')
            return false;
        }
        if (senha == '') {
            Alert.alert('Senha em branco', 'Digite uma senha')
            return false;
        }
        if (confirmaSenha == '') {
            Alert.alert('Confirmação de senha em branco', 'Digite uma senha')
            return false;
        }
        if (senha != confirmaSenha) {
            Alert.alert("As senhas não são iguais",
                "Digite a configuração de senha corretamente")
            return false;
        }
        return true;


    }

    function tratarErros(erro: string) {
        console.log(erro);
        if (erro.includes("[auth/invalid-email]")) {
            Alert.alert("Email inválido", "Digite um email válido")
        } else if (erro.includes("[auth/weak-password]")) {
            Alert.alert("Senha Fraca", "A senha digitada é fraca. A senha deve conter pelo " + "menos 6 digitos.")
        } else if (erro.includes("[auth/email-already-in-use]")) {
            Alert.alert("Email em uso", "O email inserido já fi cadastrado em outra conta.")
        } else {
            Alert.alert("Erro", erro)
        }
    }

    async function Cadastrar() {
        setIsCarregando(true);
        if (verificaCampos()) {
            auth().createUserWithEmailAndPassword(email, senha).then(() => {
                Alert.alert("conta", "Cadastro com sucesso")
                navigation.goBack();
            }).catch((error) => { tratarErros(String(error)) }).finally(() => {
            })
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inner}>
                <Carregamento isCarregando={isCarregando} />
                <View>
                    <Text style={styles.title}>Cadastre-se</Text>
                    <Text style={styles.label}>
                        Email
                    </Text>
                    <TextInput style={styles.input} placeholder='Digite seu e-mail' onChangeText={(text) => { setEmail(text) }}></TextInput>
                    <Text style={styles.label}>
                        Senha
                    </Text>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder='Digite sua senha' onChangeText={(text) => { setSenha(text) }}>
                    </TextInput>
                    <Text style={styles.label}>
                        Confirmação de senha
                    </Text>
                    <TextInput style={styles.input} secureTextEntry={true} placeholder='Digite novamente sua senha' onChangeText={(text) => { setConfirmaSenha(text) }}>
                    </TextInput>
                    <View style={styles.navigation}>
                        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate("TelaLogin") }}>
                            <Text style={styles.buttonText}>Retornar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button} onPress={() => { [navigation.goBack(), Cadastrar()] }}>
                            <Text style={styles.buttonText}>Cadastrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
};

export default Cadastro;

const styles = StyleSheet.create({
    container_fixo: {
        flex: 1,
    },
    inner: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#4DF674'
    },
    title: {
        textAlign: 'center',
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000000',
        paddingBottom: 50
    },
    navigation: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    label: {
        color: '#222',
        fontWeight: 'bold',
        fontSize: 18,
        paddingLeft: 5,
    },
    input: {
        width: '85%',
        color: 'black',
        borderWidth: 3,
        borderRadius: 5,
        margin: 3,
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginVertical: 10,
    },
    button: {
        elevation: 5,
        backgroundColor: "#0066ff",
        borderRadius: 5,
        paddingVertical: 10,
        paddingHorizontal: 20,
        minWidth: 110
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    }
});