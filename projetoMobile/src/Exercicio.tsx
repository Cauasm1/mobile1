import React from 'react';
import { Text } from 'react-native';

type Props = {
    nome: string;
    nota1: number;
    nota2: number;
}

const media(nota1: number, nota2: number){
    return (nota1 + nota2) / 2;
}

function resultado(media: number) {
    return media >= 7 ? 'Aprovado' : 'Reprovado';
}

const Aprovado = (props: Props) >= {
    return()
}


return (
    <Text style={{ fontSize: 40, color: 'red' }}>
        {props.nome + '' + props.nota1 + '' + props.nota2 + ''}
    </Text>
)
};

export default Aprovado;