import { useState } from "react";
import { Alert, } from "react-native";

import firestore from "@react-native-firebase/firestore";
import Carregamento from "../Carregamento";
import { CadNotasProps } from "../navigation/HomeNavigator";
import { INotas } from "../model/INotas";

const TelaCadNota = ({ navigation, route }: CadNotaProps) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [isCarregando, setIsCarregando] = useState(false);

    function Cadastrar() {
        setIsCarregando(true);

        if(verificaCampos()){
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
}